import { basename, dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "npm:puppeteer-core@24";

const args = [...Deno.args];
const outputDirectory = args[0] === "--output-dir" ? resolve(args[1] ?? "") : undefined;
if (args[0] === "--output-dir")
{
    args.splice(0, 2);
}

if (outputDirectory && args.some((arg) => arg.toLowerCase().endsWith(".pdf")))
{
    throw new Error("Use either --output-dir or explicit HTML/PDF pairs, not both.");
}

const hasOutputPairs = args.length > 0
    && args.length % 2 === 0
    && args.filter((_, index) => index % 2 === 1).every((arg) => arg.toLowerCase().endsWith(".pdf"));
const hasPdfArgs = args.some((arg) => arg.toLowerCase().endsWith(".pdf"));

if (hasPdfArgs && !hasOutputPairs)
{
    throw new Error("Specify output paths as alternating HTML/PDF pairs.");
}

const inputs = hasOutputPairs
    ? Array.from({ length: args.length / 2 }, (_, index) => ({
        inputArg: args[index * 2],
        outputArg: args[index * 2 + 1]
    }))
    : args.map((inputArg) => ({ inputArg }));

if (!inputs.length)
{
    console.error("Usage: deno run <permissions> html_to_pdf.js --output-dir <folder> <file1.html> [file2.html ...]");
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
