(function () {
  const scripts = [
    "js/jspdf.min.js",
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

  function withVersion(src) {
    if (!version) {
      return src;
    }
    return src + (src.indexOf('?') >= 0 ? '&' : '?') + 'v=' + encodeURIComponent(version);
  }

  scripts.forEach((src) => {
    const resolvedSrc = withVersion(src);
    if (document.querySelector('script[src="' + src + '"]') || document.querySelector('script[src="' + resolvedSrc + '"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = resolvedSrc;
    script.async = false;
    head.appendChild(script);
  });
})();
