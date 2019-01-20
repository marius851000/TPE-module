module.exports = function(sails) {
  var execute = require("./lib/execute.js");

  return {
    exec: execute;
  };
};
