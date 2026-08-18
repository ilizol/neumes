(function () {
  const head = document.head || document.getElementsByTagName("head")[0];
  const version = window.neumesCacheVersion;

  function withVersion(src) {
    if (!src || !version) {
      return src;
    }
    return src + (src.indexOf('?') >= 0 ? '&' : '?') + 'v=' + encodeURIComponent(version);
  }

  function addScript(src) {
    if (!src) {
      return;
    }

    const resolvedSrc = withVersion(src);
    if (document.querySelector('script[src="' + src + '"]') || document.querySelector('script[src="' + resolvedSrc + '"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = resolvedSrc;
    script.async = false;
    head.appendChild(script);
  }

  addScript("js/neumes_data.js");

  const pageDataScripts = window.neumesPageData;
  const sources = Array.isArray(pageDataScripts)
    ? pageDataScripts
    : [pageDataScripts];

  sources.forEach(addScript);

  addScript("js/neumes_functions.js");
  addScript("js/neumes.js");
})();
