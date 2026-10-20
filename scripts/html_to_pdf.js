import { basename, dirname, isAbsolute, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "npm:puppeteer-core@24";

const args = [...Deno.args];
let inputDirectory;
let outputDirectory;
let suffixDirectory;
while (args[0]?.startsWith("--"))
{
    const optionArgument = args.shift();
    const equalsIndex = optionArgument.indexOf("=");
    const option = equalsIndex === -1 ? optionArgument : optionArgument.slice(0, equalsIndex);
    const value = equalsIndex === -1 ? args.shift() : optionArgument.slice(equalsIndex + 1);
    if (!value || value.startsWith("--"))
    {
        throw new Error(`Missing value for ${option}.`);
    }

    if (option === "--input-dir")
    {
        inputDirectory = resolve(value);
    }
    else if (option === "--output-dir")
    {
        outputDirectory = resolve(value);
    }
    else if (option === "--suffix-dir")
    {
        suffixDirectory = value;
    }
    else
    {
        throw new Error(`Unknown option: ${option}`);
    }
}

if (suffixDirectory)
{
    if (!inputDirectory || !outputDirectory)
    {
        throw new Error("--suffix-dir requires both --input-dir and --output-dir.");
    }
    if (isAbsolute(suffixDirectory) || suffixDirectory.split(/[\\/]/).includes(".."))
    {
        throw new Error("--suffix-dir must be a relative path without '..'.");
    }

    inputDirectory = resolve(inputDirectory, suffixDirectory);
    outputDirectory = resolve(outputDirectory, suffixDirectory);
}

if (inputDirectory && args.length)
{
    throw new Error("Use either --input-dir or explicit HTML inputs, not both.");
}

if (outputDirectory && args.some((arg) => arg.toLowerCase().endsWith(".pdf")))
{
    throw new Error("Use either --output-dir or explicit HTML/PDF pairs, not both.");
}

let inputArgs = args;
if (inputDirectory)
{
    inputArgs = [];
    for await (const entry of Deno.readDir(inputDirectory))
    {
        if (entry.isFile && entry.name.toLowerCase().endsWith(".html"))
        {
            inputArgs.push(resolve(inputDirectory, entry.name));
        }
    }
    inputArgs.sort();
}

const hasOutputPairs = inputArgs.length > 0
    && inputArgs.length % 2 === 0
    && inputArgs.filter((_, index) => index % 2 === 1).every((arg) => arg.toLowerCase().endsWith(".pdf"));
const hasPdfArgs = inputArgs.some((arg) => arg.toLowerCase().endsWith(".pdf"));

if (hasPdfArgs && !hasOutputPairs)
{
    throw new Error("Specify output paths as alternating HTML/PDF pairs.");
}

const inputs = hasOutputPairs
    ? Array.from({ length: inputArgs.length / 2 }, (_, index) => ({
        inputArg: inputArgs[index * 2],
        outputArg: inputArgs[index * 2 + 1]
    }))
    : inputArgs.map((inputArg) => ({ inputArg }));

if (!inputs.length)
{
    console.error("Usage: deno run <permissions> html_to_pdf.js --input-dir <folder> [--output-dir <folder>]");
    console.error("   or: deno run <permissions> html_to_pdf.js --input-dir <root> --output-dir <root> --suffix-dir <folder>");
    console.error("   or: deno run <permissions> html_to_pdf.js --output-dir <folder> <file1.html> [file2.html ...]");
    console.error("   or: deno run <permissions> html_to_pdf.js <file1.html> [file2.html ...]");
    console.error("   or: deno run <permissions> html_to_pdf.js <file1.html> <output1.pdf> [file2.html output2.pdf ...]");
    Deno.exit(1);
}

const resolvedInputs = await Promise.all(inputs.map(async ({ inputArg, outputArg }) =>
{
    const inputUrl = inputArg.startsWith("file:")
        ? new URL(inputArg)
        : pathToFileURL(resolve(inputArg));

    if (inputUrl.protocol !== "file:")
    {
        throw new Error(`Input must be a local file path or file:// URL: ${inputArg}`);
    }

    const inputPath = fileURLToPath(inputUrl);
    await Deno.stat(inputPath);

    return {
        inputUrl,
        outputPath: outputArg
            ? resolve(outputArg)
            : resolve(outputDirectory ?? ".", basename(inputPath).replace(/\.html?$/i, ".pdf"))
    };
}));

const outputPaths = new Set();
for (const input of resolvedInputs)
{
    if (outputPaths.has(input.outputPath))
    {
        throw new Error(`Multiple inputs would write to ${input.outputPath}.`);
    }
    outputPaths.add(input.outputPath);
}

const downloadRoot = await Deno.makeTempDir({ prefix: "neumes-pdf-" });
const browser = await puppeteer.launch({
    executablePath: "/usr/bin/chromium",
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"]
});

try
{
    for (const [index, input] of resolvedInputs.entries())
    {
        const downloadDirectory = `${downloadRoot}/${index}`;
        await Deno.mkdir(downloadDirectory);

        const page = await browser.newPage();
        try
        {
            const cdp = await page.createCDPSession();
            await cdp.send("Page.setDownloadBehavior", {
                behavior: "allow",
                downloadPath: downloadDirectory
            });
            await page.goto(input.inputUrl.href, { waitUntil: "load", timeout: 60000 });

            const deadline = Date.now() + 60000;
            let downloadedPdf;

            while (Date.now() < deadline)
            {
                for await (const entry of Deno.readDir(downloadDirectory))
                {
                    if (entry.isFile && entry.name.toLowerCase().endsWith(".pdf"))
                    {
                        downloadedPdf = `${downloadDirectory}/${entry.name}`;
                        break;
                    }
                }

                if (downloadedPdf)
                {
                    break;
                }
                await new Promise((resolveWait) => setTimeout(resolveWait, 200));
            }

            if (!downloadedPdf)
            {
                throw new Error(`The page did not generate a PDF before the 60-second timeout: ${input.inputUrl.href}`);
            }

            await Deno.mkdir(dirname(input.outputPath), { recursive: true });
            await Deno.copyFile(downloadedPdf, input.outputPath);
            console.log(`PDF saved to ${input.outputPath}`);
        }
        finally
        {
            await page.close();
        }
    }
}
finally
{
    await browser.close();
    await Deno.remove(downloadRoot, { recursive: true });
}
