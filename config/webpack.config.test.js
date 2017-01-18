var path = require('path');
var webpack = require('webpack');

module.exports = {
    noInfo: true,
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.json', '.jsx'],
        modulesDirectories: ['src', 'node_modules']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loaders: ['babel', 'awesome-typescript-loader'] },
            { test: /\.ts?$/, loader: 'awesome-typescript-loader' },
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.css$/, loader: 'style!css!' }
        ]
    },

}