(function ()
{
  const pdfEngine = window.pdfEngine || "jspdf";
  const hasOpenTypeMarks = window.hasOpenTypeMarks || false;
  const scripts = [
    //### jsPDF
    "js/jspdf.min.js",
    ...(pdfEngine === "jspdf" && hasOpenTypeMarks ? [

      "js/harfbuzz_offline_classic.js",
      "js/harfbuzz_loader.js",
      "js/jspdf-harfbuzz.js",
    ] : []),
    //### PDFKit
    ...(pdfEngine === "pdfkit" ? [
      "js/pdfkit.standalone.js",
      "js/blob-stream.js",
    ] : []),
    //### Alegreya
    "fonts/Alegreya-Bold-normal.js",
    "fonts/Alegreya-BoldItalic-normal.js",
    "fonts/Alegreya-Medium-normal.js",
    "fonts/Alegreya-MediumItalic-normal.js",
    //### Almouzios
    "fonts/Almouzios-normal.js",
    //### KA New Stathis
    "fonts/KANewStathisArchaia-Regular-normal.js",
    "fonts/KANewStathisChronos-Regular-normal.js",
    "fonts/KANewStathisCombo-Regular-normal.js",
    "fonts/KANewStathisFthora-Regular-normal.js",
    "fonts/KANewStathisMain-Regular-normal.js",
    "fonts/KANewStathisMartyria-Regular-normal.js",
    //### KA Almouzios
    "fonts/KAAlmouziosChronos-Regular-normal.js",
    "fonts/KAAlmouziosCombo-Regular-normal.js",
    "fonts/KAAlmouziosFthora-Regular-normal.js",
    "fonts/KAAlmouziosMain-Regular-normal.js",
    "fonts/KAAlmouziosMartyria-Regular-normal.js",
    //### KA EZ
    "fonts/KAEZChronos-Regular-normal.js",
    "fonts/KAEZFthora-Regular-normal.js",
    "fonts/KAEZMain-Regular-normal.js",
    "fonts/KAEZMartyria-Regular-normal.js",
    //### Noto Sans Symbols2 
    "fonts/NotoSansSymbols2-Regular-normal.js"
  ];

  const head = document.head || document.getElementsByTagName("head")[0];
  const version = window.neumesCacheVersion;

  function withVersion(src)
  {
    if (!version)
    {
      return src;
    }
    return src + (src.indexOf('?') >= 0 ? '&' : '?') + 'v=' + encodeURIComponent(version);
  }

  window.neumesIncludesReady = Promise.all(scripts.map((src) =>
  {
    const resolvedSrc = withVersion(src);
    const existingScript = document.querySelector('script[src="' + src + '"]') || document.querySelector('script[src="' + resolvedSrc + '"]');
    if (existingScript)
    {
      return Promise.resolve();
    }

    return new Promise((resolve) =>
    {
      const script = document.createElement("script");
      script.src = resolvedSrc;
      script.async = false;
      script.addEventListener("load", resolve, { once: true });
      script.addEventListener("error", resolve, { once: true });
      head.appendChild(script);
    });
  }));
})();
