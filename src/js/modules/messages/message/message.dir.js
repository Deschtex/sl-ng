(function (ng) {

	'use strict';

	var $ = require('jquery');

	module.exports = function (mod) {
		mod.directive('message', ['$timeout', F]);
	};

	/**
	 * @ngdoc directive
	 * @module app.messages.message
	 * @name message
	 */
	function F ($timeout) {
		return ({
			restrict: 'E',
			template: '\
				<time class="message__time" ng-hide="isHiddenTime(message.timestamp, $index)">{{message.timestamp | datetime:\'long\'}}</time>\
				<span class="message__text">{{message.text}}</span>\
			',
			controller: 'MessageCtrl',
			link: function (scope, element, attrs, ctrl) {
				element.bind('touchstart', function () {
					this._timer = $timeout(function () {
						ctrl.setCopyButtonSettings({
							width: $(element).outerWidth(),
							pos: $(element).offset()
						});
						ctrl.select(scope.message);
					}, 300);
				});
				element.bind('touchend', function () {
					$timeout.cancel(this._timer);
				});
				scope.$on('$destroy', function () {
					element.unbind('touchstart');
					element.unbind('touchend');
				});
			}
		});
	}

}(require('angular')));