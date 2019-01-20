var Promise = require('bluebird');
module.exports = function execute(params) {
  if(params.deviceType.type !== 'binary'){
        return Promise.reject(new Error('Type not handled yet'));
  }
  return new Promise(function(resolve, reject) {
		sails.log.info("asked to execute sometinh")

		resolve(true);

		// if something fails, reject(new Error('bad bad'));
	});
};
