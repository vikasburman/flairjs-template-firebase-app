const VueView = await include('flair.ui.vue.VueView');
const CommonLayout = await include('myapp.shared.views.CommonLayout');
const ServerDateTime = await include('myapp.feature1.services.ServerDateTime');

/**
 * @name HomeView
 * @description Default Home View
 */
$$('ns', '(auto)');
Class('(auto)', VueView, function() {
    this.layout = new CommonLayout();

    this.i18n = {
        titles: "./titles.json",
        strings: "./strings.json"
    };

    this.title = "Home";
    this.data = {
        now: ''
    };

    this.html = `
    <div><p><img src="./assets/images/logo.png"></img><h2>{{ i18n('strings', 'hello', 'Hello World!') }}</h2><p>Current server time is: {{ now }}</p></div>
    `;

    this.now = async () => {
        return await ServerDateTime.now();
    };

    $$('override');
    this.beforeLoad = async (base, ctx, el) => { // eslint-disable-line no-unused-vars
        this.title = this.i18n.titles.home || 'Home';

        this.data.now = await this.now();
    };
});
