(function (ng) {

	'use strict';

	module.exports = function (mod) {
		mod.factory('EventBus', ['$rootScope', 'EventList', F]);
	};

	/**
	 * @ngdoc factory
	 * @module app.core
	 * @name EventBus
	 */
	function F ($rootScope, EventList) {
		var isSupportedEvent = (
			function () {
				var events = [];
				for (var i in EventList) {
					events.push(EventList[i]);
				}
				return function (name) {
					return ~events.indexOf(name);
				};
			}
		());
		return ({
			trigger: function (name/*,...args*/) {
				if ( ! isSupportedEvent(name)) { // not allowed
					throw 'EventBus.trigger(): Event `' + name + '` not supported.';
				}
				$rootScope.$broadcast.apply($rootScope, arguments);
			},
			on: function (name, handler, scope) {
				if ( ! isSupportedEvent(name)) { // not allowed
					throw 'EventBus.on(): Event `' + name + '` not supported';
				}
				(scope || $rootScope).$on(name, handler);
			}
		});
	}

}(require('angular')));
