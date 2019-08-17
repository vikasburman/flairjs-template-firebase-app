const RESTEndPoint = await include('flair.api.RESTEndPoint');
const { CurrentTime } = ns('myapp.feature2');

/**
 * @name Now
 * @description Now endpoint
 */
$$('ns', '(auto)');
Class('(auto)', RESTEndPoint, function() {
    $$('override');
    this.onGet = async (base, req, res) => { // eslint-disable-line no-unused-vars
        let curTime = new CurrentTime();
        res.json({ now: 'fbapp2: ' + curTime.getCurrentTime() });
        return true; // handled
    };    
});