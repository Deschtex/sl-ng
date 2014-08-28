(function (ng) {

	'use strict';

	module.exports = function () {
		ng.module('app.messages').controller(
			'MessagesCtrl', ['$scope', 'EventBus', 'EventList', F]
		);
	};

	/**
	 * @ngdoc controller
	 * @module app.messages
	 * @name MessagesCtrl
	 */
	function F ($scope, EventBus, EventList) {
		/**
		 * Holds the currently selected message,
		 * which is used to determine which message
		 * should be highlighted and not.
		 * @type {Object}
		 */
		$scope.selectedMessage = null;
		/**
		 * Determines if message is selected or not.
		 * @param  {Object} message
		 * @return {Boolean}
		 */
		$scope.isSelected = function (message) {
			return $scope.selectedMessage === message;
		};
		/**
		 * Decides whether to show the time or not
		 * by calculating the difference between the 
		 * current message's time and the previous
		 * message's time. If the delta is less than
		 * 10 minutes, the time should be hidden.
		 * @return {Function}
		 */
		$scope.isHiddenTime = (function () {
			var previous = 0; // previous time
			/**
			 * @param  {Integer} timestamp
			 * @param  {Integer} index
			 * @return {Boolean}
			 */
			return function (timestamp, index) {
				previous = index ? previous : 0;
				var d = timestamp - previous; // delta
				previous = timestamp; // save for next
				return d < 600000; // < 10 minutes
			};
		}());
		/**
		 * Initialize function.
		 */
		function initialize () {
			EventBus.subscribe(
				EventList.DIALOGUE_SELECTED,
				function (e, dialogue) {
					$scope.selectedMessage = null;
					$scope.dialogue = dialogue;
				},
				$scope
			);
		}
		initialize();
	}

}(require('angular')));