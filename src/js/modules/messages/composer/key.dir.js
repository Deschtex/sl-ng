(function (ng) {

	'use strict';

	module.exports = function (mod) {
		mod.directive('key', F);
	};

	/**
	 * @ngdoc directive
	 * @module app.messages.composer
	 * @name key
	 */
	function F () {
		return {
			restrict: 'E',
			template: '\
				<span class="key__value">{{getValue(key)}}</span>\
				<span class="key__extra">{{getExtras(key)}}</span>\
			',
			controller: 'KeyCtrl',
			link: function (scope, element, attrs, ctrl) {
				element.bind('click', function () {
					ctrl.showExtrasPopup(element.scope());
				});
			}
		};
	}

}(require('angular')));