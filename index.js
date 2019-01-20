module.exports = function(sails) {
  var send = require("./lib/send.js");
  var setup = require("./lib/configure.js");
  var exec = require("./lib/exec.js")
  return {
    send: send,
    setup: setup,
    exec: exec
  };
};
