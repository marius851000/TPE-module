var Promise = require('bluebird');
module.exports = function send(params) {
  return new Promise(function(resolve, reject) {
    var Gpio = require('onoff').Gpio;
    // TODO : customize port
    var LED = new Gpio(21, 'out');
		if (params.order == "power_on") {
      sails.log.info("powering on the led");
      LED.writeSync(1);
    } else if (params.order == "power_off") {
      sails.log.info("powering off the led");
      LED.writeSync(0);
    } else {
      reject(new Error('unknow order for led'));
    };
		resolve(true);

		// if something fails, reject(new Error('bad bad'));
	});
};
