var Promise = require('bluebird');

module.exports = function send(params) {
  return new Promise(function(resolve, reject) {
    sails.log.info(params.state.value);
    goal_state = params.state.value;
    if (goal_state == 1) {
      gladys.modules.marius_led.send({identifier: 21, order: "power_on"});
    } else {
      gladys.modules.marius_led.send({identifier: 21, order: "power_off"});
    };
		resolve(true);
	});
};
