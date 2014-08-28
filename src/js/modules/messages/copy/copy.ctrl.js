(function (ng) {

	'use strict';

	module.exports = function () {
		ng.module('app.messages.copy').controller(
			'MessageCopyCtrl', ['$scope', F]
		);
	};

	/**
	 * @ngdoc controller
	 * @module app.messages.copy
	 * @name MessageCopyCtrl
	 */
	function F ($scope) {
		/**
		 * Holds the position for the copy button.
		 * @type {Object}
		 */
		$scope.copyPos = { left: 0, top: 0 };
		return ({ // Exposed API
			/**
			 * Sets the visibility of the copy button.
			 * @param {Boolean} flag
			 */
			setCopyVisibility: function (flag) {
				$scope.isCopyVisible = flag;
			},
			/**
			 * Calculates and sets the position of the copy button.
			 * @param {Object} pos An object with `top` and `left`.
			 * @param {Integer} width Width of the message, in px.
			 */
			setCopyPosition: function (pos, width) {
				var message = $scope.selectedMessage;
				var offset = message.type === 'in' ? 8 : -8;
				var left = pos.left + width / 2 - 45;
				$scope.copyPos = {
					left: left + offset,
					top: pos.top - 210
				};
			}
		});
	}

}(require('angular')));