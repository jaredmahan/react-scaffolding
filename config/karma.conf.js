var webpackConfig = require('./webpack.config.test');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: ['mocha'], //use the mocha test framework
    files: [
      '../**/*.spec.ts'
    ],
    preprocessors: {
      'src/**/*.spec.ts': ['webpack', 'sourcemap'] //preprocess with webpack and our sourcemap loader
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity
  });
};