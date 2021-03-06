const { VueView } = await ns('flair.ui');
const CommonLayout = await include('myapp.shared.views.CommonLayout');
const ServerDateTime = await include('myapp.feature1.services.ServerDateTime');

/**
 * @name HomeView
 * @description Default Home View
 */
Class('', VueView, function() {
    this.title = "Home";
    this.layout = new CommonLayout();
    this.i18n = {
        titles: "./titles.json",
        strings: "./strings.json"
    };
    this.html = './HomeView/index.html';
    this.style = './HomeView/styles.css';
    this.data = {
        now: 'loading...'
    };

    $$('override');
    this.beforeLoad = async (base, ctx, el) => { // eslint-disable-line no-unused-vars
        this.title = this.i18n.titles.home || 'Home';
    };

    $$('override');
    this.loadData = async (base, ctx, el) => { // eslint-disable-line no-unused-vars
        this.data.now = await ServerDateTime.now(this.abortHandle('serverTime'));
        // note: by calling this.abort('serverTime') any long running service call 
        // can be aborted on choice here, otherwise if page load aborted in between 
        // cancelLoadData call will do it automatically for all such abortHandles
    };
});
