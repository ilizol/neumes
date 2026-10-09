import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const directory = new URL(".", import.meta.url);
const factoryPath = new URL("harfbuzz.js", directory);
const modulePath = new URL("index.mjs", directory);
const wasmPath = new URL("harfbuzz.wasm", directory);
const outputPath = new URL("../harfbuzz_offline_classic.js", directory);

function replaceOnce(source, pattern, replacement, description)
{
    const globalPattern = new RegExp(
        pattern.source,
        pattern.flags.includes("g") ? pattern.flags : `${pattern.flags}g`
    );
    const matches = Array.from(source.matchAll(globalPattern));
    if (matches.length !== 1)
    {
        throw new Error(`Could not uniquely transform ${description}`);
    }
    return source.replace(pattern, replacement);
}

let factory = await readFile(factoryPath, "utf8");
factory = factory.replaceAll("import.meta.url", "window.location.href");
factory = replaceOnce(
    factory,
    /export default createHarfBuzz;\s*$/,
    "return createHarfBuzz;",
    "the HarfBuzz.js ESM factory export"
);

let api = await readFile(modulePath, "utf8");
api = replaceOnce(
    api,
    /^import createHarfBuzz from "\.\/harfbuzz\.js";\s*/,
    "",
    "the HarfBuzz.js factory import"
);
api = replaceOnce(
    api,
    /init\(await createHarfBuzz\(\)\);/,
    "init(await createHarfBuzz({ wasmBinary }));",
    "the HarfBuzz.js WASM initialization"
);
api = replaceOnce(
    api,
    /^export \{([^}]+)\};\s*$/m,
    "window.neumesHarfBuzz = { $1 };",
    "the HarfBuzz.js public exports"
);

const wasmBase64 = (await readFile(wasmPath)).toString("base64");
const output = `/* Generated from HarfBuzz.js v1.6.3, upstream commit 79860e8f1343093469dace1546aad148e08b47de. */
(function ()
{
    const createHarfBuzz = (function ()
    {
${factory}
    })();

    window.neumesHarfBuzzReady = (async function ()
    {
        const wasmBinary = Uint8Array.from(atob("${wasmBase64}"), function (character)
        {
            return character.charCodeAt(0);
        });
${api}
    })();

    window.neumesHarfBuzzReady.catch(function (error)
    {
        console.warn("HarfBuzz shaping is unavailable:", error);
    });
})();
`;

await writeFile(outputPath, output);
console.log(`Wrote ${fileURLToPath(outputPath)}`);