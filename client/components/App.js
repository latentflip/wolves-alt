var React = require('react');
var { RouteHandler } = require('react-router');

module.exports = React.createClass({
    render() {
        return (
            <div>
                <h1>Wolves.technology</h1>
                <RouteHandler { ...this.props } />
            </div>
        );
    }
});

