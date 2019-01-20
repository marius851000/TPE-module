module.exports = function(sails) {
  var execute = require("./lib/execute.js");
  var setup = require("./lib/configure.js");
  var init = require("./lib/init.js")
  return {
    exec: execute,
    setup: setup,
    init: init
  };
};
