const RESTfulService = await include('flair.api.RESTfulService');

/**
 * @name Now
 * @description Now service
 */
$$('ns', '(auto)');
Class('(auto)', RESTfulService, function() {
    $$('override');
    this.onGet = async (base, req, res) => { // eslint-disable-line no-unused-vars
        res.json({ now: Date.now().toString() });
        return true; // handled
    };    
});
