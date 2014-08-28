(function (ng) {

	'use strict';

	module.exports = function () {
		ng.module('app.dialogues').controller(
			'DialoguesCtrl', ['$scope', 'Cache', 'Dialogue', F]
		);
	};

	/**
	 * @ngdoc controller
	 * @module app.dialogues
	 * @name DialoguesCtrl
	 */
	function F ($scope, Cache, Dialogue) {
		/**
		 * Global cache for the dialogues module.
		 * @type {Object}
		 */
		$scope.cache = Cache.create('app.dialogues');
		/**
		 * Holds the currently selected dialogue,
		 * which is used to determine which dialogue
		 * should be highlighted and not.
		 * @type {Object}
		 */
		$scope.selectedDialogue = null;
		/**
		 * Determines if dialogue is selected or not.
		 * @param  {Object} dialogue
		 * @return {Boolean}
		 */
		$scope.isSelected = function (dialogue) {
			return $scope.selectedDialogue === dialogue;
		};
		/**
		 * Initialize function.
		 */
		function initialize () {
			Dialogue.load().success(function (dialogues) {
				$scope.dialogues = dialogues;
			});
		}
		initialize();
	}

}(require('angular')));