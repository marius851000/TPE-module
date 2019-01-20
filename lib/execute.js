var Promise = require('bluebird');
module.exports = function execute(params) {
  if(params.deviceType.type !== 'binary'){
        return Promise.reject(new Error('Type not handled yet'));
  }
  return new Promise(function(resolve, reject) {
		// async work here
		var valueToReturn = 12;
    // execute code

		resolve(true);

		// if something fails, reject(new Error('bad bad'));
	});
};
