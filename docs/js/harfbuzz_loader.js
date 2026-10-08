(function ()
{
    if (!window.neumesHarfBuzzReady)
    {
        window.neumesHarfBuzzReady = Promise.resolve(null);
    }

    window.neumesHarfBuzzReady.catch(function (error)
    {
        console.warn('HarfBuzz shaping is unavailable:', error);
        return null;
    });
})();