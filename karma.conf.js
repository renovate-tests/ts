/* global module */
module.exports = function settings(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'test/*.js',
    ],
    preprocessors: {
      'test/*.js': ['babel'],
    },
    reporters: ['dots'],
    browsers: ['jsdom'],
    singleRun: true,
  });
};
