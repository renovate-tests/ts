var path = require("path");

module.exports = function(config) {
  config.set({
    "basePath": "",
    "frameworks": ["mocha", "commonjs"],
    "files": [
      "test/*.js",
      "node_modules/power-assert/build/power-assert.js"
    ],
    "preprocessors": {
      "test/*.js": ["commonjs"]
    },
    "reporters": ["progress"],
    "browsers": ["PhantomJS"],
    "singleRun": true
  });
};
