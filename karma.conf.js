var webpack = require('webpack');
var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'test/test.index.js',
    ],
    exclude: [
      'src/require.config.js'
    ],
    preprocessors: {
      'test/test.index.js': ['webpack'],
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    webpack: {
      resolve: {
        root: path.join(__dirname, 'src'),
        modulesDirectories: [
          'node_modules',
          'bower_components',
        ],
        extensions: ['', '.coffee', '.js']
      },
      plugins: [
        new webpack.ResolverPlugin([
          new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(
            ['bower.json'], ['main'])
        ])
      ]
    },
  });
};
