var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.json', '.jsx'],
    modulesDirectories: ['src', 'node_modules']
  },
  entry: {
    hotLoader: ['react-hot-loader/patch', 'webpack/hot/only-dev-server'],
    devServer: 'webpack-dev-server/client?http://localhost:3000',
    polyfills: 'polyfills.ts',
    vendor: 'vendor.ts',
    app: 'index.tsx'    
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    preLoaders: [
      { test: /\.ts$/, loader: "tslint" },
      { test: /\.tsx$/, loader: "tslint" }
    ],
    loaders: [
      { test: /\.tsx?$/, loaders: ['babel', 'awesome-typescript-loader'] },
      { test: /\.ts?$/, loader: 'awesome-typescript-loader' },
      { test: /\.html$/, loader: 'html' },
      { test: /\.json$/, loader: "json-loader" }
    ]
  },
  tslint: {
    emitErrors: true,
    failOnHint: true,
    configuration: require('../tslint.json')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills', 'devServer', 'hotLoader']
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'

    })
  ]
};