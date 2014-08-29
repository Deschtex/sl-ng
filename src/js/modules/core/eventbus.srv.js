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
					return !!~events.indexOf(name);
				};
			}
		());
		return ({
			subscribe: function (name, handler, scope) {
				if ( ! isSupportedEvent(name)) { // not allowed
					throw 'EventBus.subscribe(): Event `' + name + '` not supported';
				}
				(scope || $rootScope).$on(name, handler);
			},
			publish: function (name/*, args...*/) {
				if ( ! isSupportedEvent(name)) { // not allowed
					throw 'EventBus.publish(): Event `' + name + '` not supported.';
				}
				$rootScope.$broadcast.apply($rootScope, arguments);
				// console.log( 'EventBus.publish(): `%s`', name );
			}
		});
	}

}(require('angular')));
