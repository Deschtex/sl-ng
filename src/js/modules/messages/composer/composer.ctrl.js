(function (ng) {

	'use strict';

	var cfg = require('config');

	module.exports = function (mod) {
		mod.controller('MessageComposerCtrl', [
			'$scope', '$http', 'Cache', F.bind(mod)
		]);
	};

	/**
	 * @ngdoc controller
	 * @module app.messages.composer
	 * @name MessageComposerCtrl
	 */
	function F ($scope, $http, Cache) {
		/**
		 * Global cache for the composer sub-module.
		 * @type {Object}
		 */
		$scope.cache = Cache.create(this.name);
		//
		// Load keys and cache them
		//
		$http.get(cfg.keysDataURL, {
			cache: Cache.get(this.name)
		})
		.success(function (keys) {
			$scope.keys = keys;
		});
	}

}(require('angular')));