class WolvesListStore {
    constructor() {
        this.bindActions(this.alt.getActions('Howls'));
        this.wolves = new Set();
    }

    onReceiveHowlsList(list) {
        this._extractWolfIdsFromHowls(list);
    }

    _extractWolfIdsFromHowls(rawList) {
        rawList.forEach( (howl) => {
            if (howl.user) {
                this.wolves.add(howl.user.id);
            }
        });
    }
}

module.exports = WolvesListStore;
