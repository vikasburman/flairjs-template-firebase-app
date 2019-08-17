/**
 * @name ServerDateTime
 * @description ServerDateTime
 */
$$('ns', '(auto)');
$$('static');
Class('(auto)', function() {
    $$('cache', 10000);
    $$('fetch', 'get', 'json', '/now');
    this.now = async (api) => {
        let result = await api() || { now: 'Could not connect to server.' };
        return result.now;
    };
});
