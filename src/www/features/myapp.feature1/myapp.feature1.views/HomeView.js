const VueView = await include('flair.ui.vue.VueView');
const CommonLayout = await include('myapp.shared.views.CommonLayout');
const ServerDateTime = await include('myapp.feature1.services.ServerDateTime');

/**
 * @name HomeView
 * @description Default Home View
 */
$$('ns', '(auto)');
Class('(auto)', VueView, function() {
    this.title = "Home";
    this.layout = new CommonLayout();
    this.html = './HomeView/index.html';
    this.style = './HomeView/styles.css';
    this.i18n = {
        titles: "./titles.json",
        strings: "./strings.json"
    };
    this.data = {
        now: ''
    };

    this.getServerTime = async () => {
        return await ServerDateTime.now();
    };

    $$('override');
    this.beforeLoad = async (base, ctx, el) => { // eslint-disable-line no-unused-vars
        this.title = this.i18n.titles.home || 'Home';
        this.data.now = await this.getServerTime();
    };
});
