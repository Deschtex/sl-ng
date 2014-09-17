(function (ng) {

	'use strict';

	module.exports = function (mod) {
		mod.directive('dialogue', ['$timeout', F]);
	};

	/**
	 * @ngdoc directive
	 * @module app.dialogues.dialogue
	 * @name dialogue
	 */
	function F ($timeout) {
		return {
			restrict: 'E',
			template: '\
				<span class="dialogue__name">{{dialogue.name}}</span>\
				<span class="dialogue__synopsis">{{getSynopsis(dialogue)}}</span>\
				<time class="dialogue__time">{{getTime(dialogue) | datetime:\'short\'}}</time>\
				<i class="dialogue__arrow"></i>\
			',
			controller: 'DialogueCtrl',
			link: function (scope, element, attrs, ctrl) {
				element.bind('touchstart', function () {
					$timeout(function () {
						ctrl.select(scope.dialogue);
					}, 150);
				});
				element.bind('touchend', function () {
					scope.$apply(function () {
						ctrl.publishSelected(scope.dialogue);
					});
				});
			}
		};
	}

}(require('angular')));