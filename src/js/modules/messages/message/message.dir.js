(function (ng) {

	'use strict';

	var $ = require('jquery');

	module.exports = function () {
		ng.module('app.messages.message').directive(
			'message', ['$timeout', F]
		);
	};

	/**
	 * @ngdoc directive
	 * @module app.messages
	 * @name message
	 */
	function F ($timeout) {
		return ({
			restrict: 'CA',
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