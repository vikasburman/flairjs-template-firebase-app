const { RESTEndPoint } = await ns('flair.api');
const CurrentTime = await include('myapp.feature2.CurrentTime');


/**
 * @name Now
 * @description Now endpoint
 */
Class('', RESTEndPoint, function() {
    $$('override');
    this.onGet = async (base, req, res) => { // eslint-disable-line no-unused-vars
        let curTime = new CurrentTime();
        res.json({ now: 'fbapp2: ' + curTime.getCurrentTime() });
        return true; // handled
    };    
});
