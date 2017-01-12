var path = require('path');

module.exports = {
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.json', '.jsx'],
        modulesDirectories: ['src', 'node_modules']
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loaders: ['babel', 'awesome-typescript-loader'] },
            { test: /\.ts?$/, loader: 'awesome-typescript-loader' },
            { test: /\.json$/, loader: "json-loader" }
        ]
    },

}