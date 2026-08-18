(function () {
  const head = document.head || document.getElementsByTagName("head")[0];

  function addScript(src) {
    if (!src) {
      return;
    }

    if (document.querySelector('script[src="' + src + '"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = src;
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
