const CachemanRedis = require('cacheman-redis');

// @param [Object] options options for redis client @see node_redis
module.exports = function(options) {
	const redis = new CachemanRedis(options);
	const cache = {
		set: function(key, value, ttl) {
			return new Promise(function(resolve, reject) {
				redis.set(key, value, ttl, function(error) {
					if(error) {
						return reject(error);
					}
					resolve(value);
				});
			});
		},
		get: function(key) {
			return new Promise(function(resolve, reject) {
				redis.get(key, function(error, data) {
					if(error) {
						return reject(error);
					}
					resolve(data);
				});
			});
		},
		del: function(key) {
			return new Promise(function(resolve, reject) {
				redis.del(key, function(error) {
					error ? reject(error) : resolve();
				});
			});
		},
		clear: function() {
			return new Promise(function(resolve, reject) {
				redis.clear(function(error) {
					error ? reject(error) : resolve();
				});
			});
		}
	};

	return cache;
};
