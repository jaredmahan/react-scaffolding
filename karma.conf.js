var webpackConfig = require('./config/webpack.config.test');

var path = require('path');
var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    //basePath: '',
    port: 9876,
    reporters: ["mocha"],
    autoWatch: true,
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'], //use the mocha test framework
    files: [
      './src/**/*.spec.tsx'

    ],
    proxies: {
      '/base': '/base/src'
    },
    preprocessors: {
      './src/**/*.tsx': ['webpack', 'sourcemap']
    },
    webpack: {
      noInfo: true,
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.json', '.jsx']
      },
      module: {
        loaders: [
          { test: /\.tsx?$/, loaders: ['babel', 'awesome-typescript-loader'] },
          { test: /\.ts?$/, loader: 'awesome-typescript-loader' },
          { test: /\.json$/, loader: "json-loader" },
          { test: /\.css$/, loader: 'style!css!' }
        ]
      }
    },
    // webpackMiddleware: {
    //   noInfo: true,
    // },
    plugins: [
      "karma-*"
    ],
  });
};