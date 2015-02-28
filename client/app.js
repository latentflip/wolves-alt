require("babel/polyfill");
var React = require('react');
var Router = require('react-router');
var { HistoryLocation } = Router;

var routes = require('./routes');

window.alt = require('./alt')();

alt.getActions('Howls').fetchHowlsList();

Router.run(routes, HistoryLocation, (Handler, state) => {
    React.render(<Handler {...state} flux={alt} />, document.body);
});
