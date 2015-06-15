// test/require.config.js
var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

require.config({
  baseUrl: "base",
  paths: {
    "underscore": "bower_components/underscore/underscore",
  },
  shim: {
  },
  deps: tests,
  callback: window.__karma__.start
});
