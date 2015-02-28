var React = require('react');
var ListenerMixin = require('alt/mixins/ListenerMixin');

module.exports = React.createClass({
    mixins: [ListenerMixin],

    getInitialState() {
        var howlsList = this.props.flux.getStore('HowlsList').getState().howlsList;
        var howlsItems = this.props.flux.getStore('HowlsItems').getState().howls;
        var wolves = this.props.flux.getStore('WolvesItems').getState().wolves;

        return {
            howls: howlsList.map( (id) => howlsItems[id] ),
            wolves: wolves
        };
    },

    componentWillMount() {
        this.listenTo(this.props.flux.getStore('HowlsList'), this.onChange);
        this.listenTo(this.props.flux.getStore('HowlsItems'), this.onChange);
        this.listenTo(this.props.flux.getStore('WolvesItems'), this.onChange);
    },

    onChange() {
        this.setState(this.getInitialState());
    },

    render() {
        var howls = this.state.howls;
        var wolves = this.state.wolves;

        return (
            <div>
                <p>Howls</p>
                {
                    howls.map( (h) => {
                        var wolf = wolves[h.userId] || {};
                        return (
                            <div key={h.id}>
                                <p>{h.content} - <em>{wolf.username}</em></p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
});

