define(function(require, exports, module) {
  var _ = require('underscore');

  return {
    max: function(a, b, c){
      return _.max([a, b, c]);
    }
  };
});
