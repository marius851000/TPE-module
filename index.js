module.exports = function(sails) {
  var send = require("./lib/send.js");
  var setup = require("./lib/configure.js");
  //var init = require("./lib/init.js")
  return {
    send: send,
    setup: setup
    //init: init
  };
};
