var xhr = require('xhr');

var API_URL = 'http://wolves.technology';

class HowlsListActions {
    constructor() {
        this.generateActions('receiveHowlsList');
    }

    fetchHowlsList() {
        xhr({
            url: API_URL + '/howls',
        }, (err, resp, body) => {
            if (err) {
                console.error(err);
            }
            this.actions.receiveHowlsList(JSON.parse(body));
        });
    }
}

module.exports = HowlsListActions;
