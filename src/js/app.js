// src/app.js
define(['underscore'], function(){
  return {
    max: function(a, b, c){
      return _.max([a, b, c]);
    }
  };
});
