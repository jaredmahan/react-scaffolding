var webpack = require('webpack');
var path = require('path');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',
   module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css!' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
  ],
  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    port: 3000,
    hot: true,
    publicPath: '/',
    contentBase: 'dist/'
  }
});