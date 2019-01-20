module.exports = function(sails) {
  var execute = require("./lib/execute.js");
  var setup = require("./lib/configure.js")
  return {
    exec: execute,
    setup: setup
  };
};
