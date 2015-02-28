var webpack = require('webpack');
var yeticss = require('yeticss');
var autoPrefixer = require('autoprefixer-stylus');
var isDev = process.env.NODE_ENV !== 'production';

var config = {
    devtool: 'eval',
    entry: [
        './client/app.js'
    ],
    output: {
        path: __dirname + '/scripts/',
        filename: 'bundle.js',
        publicPath: '/scripts/'
    },
    plugins: [],
    resolve: {
        extensions: [
            '',
            '.js',
            '.json',
            '.styl'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader',
                ]
            },
            {
                test: /\.json$/,
                loaders: ['json']
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ]
    },
    stylus: {
        use: [yeticss(), autoPrefixer()]
    }
};

// dev specific stuff
if (isDev) {
    config.devtool = 'eval';

    config.entry.unshift(
        'webpack-dev-server/client?http://0.0.0.0:3000',
        'webpack/hot/only-dev-server'
    );

    config.plugins = config.plugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]);

    config.module.loaders[0].loaders.push('react-hot');
}


module.exports = config;
