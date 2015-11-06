/* global module */
module.exports = function(config) {
  config.set({
    "basePath": "",
    "frameworks": ["mocha"],
    "files": [
      "test/*.js",
      "node_modules/power-assert/build/power-assert.js"
    ],
    "preprocessors": {
      "test/*.js": ["babel"]
    },
    "reporters": ["dots"],
    "browsers": ["Electron"],
    "singleRun": true
  });
};
