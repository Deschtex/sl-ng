(function (ng) {

	'use strict';

	module.exports = function (mod) {
		mod.controller('KeyCtrl', ['$scope', 'Key', F]);
	};

	/**
	 * @ngdoc controller
	 * @module app.messages.composer
	 * @name KeyCtrl
	 */
	function F ($scope, Key) {
		$scope.getValue = function (key) {
			return Key.getValue(key);
		};
		$scope.getExtras = function (key) {
			return Key.getExtras(key);
		};
		return ({
			showExtrasPopup: function (scope) {
				console.log('showing extras...', scope.key);
			},
		});
	}

}(require('angular')));