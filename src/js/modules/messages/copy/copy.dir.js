(function (ng) {

	'use strict';

	module.exports = function (mod) {
		mod.directive('messageCopy', ['$timeout', F]);
	};

	/**
	 * @ngdoc directive
	 * @module app.messages.copy
	 * @name messageCopy
	 */
	function F ($timeout) {
		return ({
			restrict: 'CA',
			controller: 'MessageCopyCtrl',
			link: function (scope, element, attrs, ctrl) {
				element.bind('touchstart', function (e) {
					element.addClass('is-active');
				});
				element.bind('touchend', function () {
					$timeout(function () { // slight delay
						element.removeClass('is-active');
						scope.selectedMessage = null;
					}, 200);
				});
				scope.$watch('selectedMessage', function (val) {
					ctrl.setCopyVisibility(val ? true : false);
				});
				scope.$watch('copySettings', function (obj, obj2) {
					if ( ! ng.equals(obj, obj2)) { // post-init only
						ctrl.setCopyPosition(obj.pos, obj.width);
					}
				});
				scope.$on('$destroy', function () {
					element.unbind('touchstart');
					element.unbind('touchend');
				});
			}
		});
	}

}(require('angular')));