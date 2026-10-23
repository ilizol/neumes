import { Buffer } from "node:buffer";
import { basename, dirname, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
let inputDirectory = resolve(projectRoot, "docs/fonts");
let inputDirectorySpecified = false;
let inputFile;
let outputDirectory;

const args = [...Deno.args];
while (args.length)
{
    const optionArgument = args.shift();
    if (!optionArgument.startsWith("--"))
    {
        if (inputFile)
        {
            throw new Error("Specify at most one TTF file.");
        }
        if (extname(optionArgument).toLowerCase() !== ".ttf")
        {
            throw new Error(`Expected a TTF file: ${optionArgument}`);
        }
        inputFile = resolve(optionArgument);
        continue;
    }

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
        inputDirectorySpecified = true;
    }
    else if (option === "--output-dir")
    {
        outputDirectory = resolve(value);
    }
    else
    {
        throw new Error(`Unknown option: ${option}`);
    }
}

if (inputFile && inputDirectorySpecified)
{
    throw new Error("Use either a TTF file or --input-dir, not both.");
}

const fonts = [];
if (inputFile)
{
    const fileInfo = await Deno.stat(inputFile);
    if (!fileInfo.isFile)
    {
        throw new Error(`Not a file: ${inputFile}`);
    }
    fonts.push({ path: inputFile, fileName: basename(inputFile) });
}
else
{
    for await (const entry of Deno.readDir(inputDirectory))
    {
        if (entry.isFile && extname(entry.name).toLowerCase() === ".ttf")
        {
            fonts.push({ path: resolve(inputDirectory, entry.name), fileName: entry.name });
        }
    }
}
fonts.sort((left, right) => left.fileName.localeCompare(right.fileName));

if (!fonts.length)
{
    throw new Error(`No TTF files found in ${inputDirectory}.`);
}

const destinationDirectory = outputDirectory ?? (inputFile ? dirname(inputFile) : inputDirectory);
await Deno.mkdir(destinationDirectory, { recursive: true });
for (const fontFile of fonts)
{
    const { fileName } = fontFile;
    const fontName = basename(fileName, extname(fileName));
    const registeredFileName = `${fontName}-normal.ttf`;
    const font = Buffer.from(await Deno.readFile(fontFile.path)).toString("base64");
    const output = `\uFEFF(function (jsPDFAPI) {\n`
        + `var font = ${JSON.stringify(font)};\n`
        + `var callAddFont = function () {\n`
        + `this.addFileToVFS(${JSON.stringify(registeredFileName)}, font);\n`
        + `this.addFont(${JSON.stringify(registeredFileName)}, ${JSON.stringify(fontName)}, "normal");\n`
        + `};\n`
        + `jsPDFAPI.events.push(['addFonts', callAddFont])\n`
        + ` })(jsPDF.API);`;

    const outputPath = resolve(destinationDirectory, `${fontName}-normal.js`);
    await Deno.writeTextFile(outputPath, output);
    console.log(`FONT JS saved to ${outputPath}`);
}