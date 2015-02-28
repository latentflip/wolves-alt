var Alt = require('alt');

module.exports = function () {
    var alt = new Alt();

    alt.addActions('Howls', require('./actions/howls-actions'));
    alt.addActions('Wolves', require('./actions/wolves-actions'));

    alt.addStore('HowlsList', require('./stores/howls-list-store'));
    alt.addStore('HowlsItems', require('./stores/howls-item-store'));

    alt.addStore('WolvesList', require('./stores/wolves-list-store'));
    alt.addStore('WolvesItems', require('./stores/wolves-item-store'));

    return alt;
};
