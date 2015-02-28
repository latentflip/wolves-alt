class HowlsListStore {
    constructor() {
        this.bindActions(this.alt.getActions('Howls'));

        this.loading = false;
        this.howlsList = [];
    }

    onFetchHowlsList() {
        this.loading = true;
    }

    onReceiveHowlsList(rawList) {
        this.waitFor(this.alt.getStore('HowlsItems').dispatchToken);
        this._init(rawList);
        this.loading = false;
    }

    _init(rawList) {
        this.howlsList = rawList.map( (h) => h.id );
    }
}
module.exports = HowlsListStore;
