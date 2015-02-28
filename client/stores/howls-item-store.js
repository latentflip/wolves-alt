var assign = require('lodash/object/assign');

class HowlsItemStore {
    constructor() {
        this.bindActions(this.alt.getActions('Howls'));
        this.howls = {};
    }

    onReceiveHowlsList(list) {
        this._storeList(list);
    }

    _storeList(rawList) {
        rawList.forEach( (h) => {
            h = assign({}, h)
            h.userId = h.user.id;
            delete h.user;
            this.howls[h.id] = h;
        });
    }
}

module.exports = HowlsItemStore;
