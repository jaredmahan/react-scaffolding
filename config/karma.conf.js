var webpackConfig = require('./webpack.config.test');

var path = require('path');
var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    autoWatch: true,
    browsers: ['Chrome'], //run in Chrome
    frameworks: ['mocha', 'chai'], //use the mocha test framework
    files: [
      '../src/**/*.spec.tsx'
    ],
    preprocessors: {
      '../src/**/*.spec.tsx': ['webpack'],
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    }
  });
};