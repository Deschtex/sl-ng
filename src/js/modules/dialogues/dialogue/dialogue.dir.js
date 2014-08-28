(function (ng) {

	'use strict';

	module.exports = function () {
		ng.module('app.dialogues.dialogue').directive(
			'dialogue', ['$timeout', F]
		);
	};

	/**
	 * @ngdoc directive
	 * @module app.dialogues
	 * @name dialogue
	 */
	function F ($timeout) {
		return {
			restrict: 'CA',
			controller: 'DialogueCtrl',
			link: function (scope, element, attrs, ctrl) {
				var dialogue = scope.dialogue;
				element.bind('touchstart', function () {
					$timeout(function () {
						ctrl.select(dialogue);
					}, 150);
				});
				element.bind('touchend', function () {
					scope.$apply(function () {
						ctrl.publishSelected(dialogue);
					});
				});
			}
		};
	}

}(require('angular')));