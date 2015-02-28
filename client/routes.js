var React = require('react');
var Router = require('react-router');
var { Route } = Router;
var App = require('./components/App');
var Howls = require('./components/Howls');

module.exports = (
    <Route name="home" path="/" handler={App}>
        <Route name="howls" path="/howls" handler={Howls} />
    </Route>
);
