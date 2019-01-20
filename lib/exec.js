var Promise = require('bluebird');
module.exports = function send(params) {
  return new Promise(function(resolve, reject) {
    sails.log.info(params)
		resolve(true);
	});
};
