var assign = require('lodash/object/assign');

class HowlsItemStore {
    constructor() {
        this.bindActions(this.alt.getActions('Howls'));
        this.wolves = {};
    }

    onReceiveHowlsList(list) {
        this._extractWolvesFromHowls(list);
    }

    _extractWolvesFromHowls(rawList) {
        rawList.forEach( (h) => {
            let user = h.user;
            if (!user) { return; }

            var existing = this.wolves[user.id];

            if (!existing) {
                this.wolves[user.id] = user;
            } else {
                this.wolves[user.id] = assign(existing, user);
            }
        });
    }
}

module.exports = HowlsItemStore;
