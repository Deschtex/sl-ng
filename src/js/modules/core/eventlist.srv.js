(function (ng) {

	'use strict';

	module.exports = function (mod) {
		mod.factory('EventList', F);
	};

	/**
	 * @ngdoc factory
	 * @module app.core
	 * @name EventList
	 */
	function F () {
		return {
			SWITCH_VIEW: 'switch-view',
			BEFORE_SWITCH_VIEW: 'before-switch-view',
			AFTER_SWITCH_VIEW: 'after-switch-view',
			DIALOGUE_SELECTED: 'dialogue-selected'
		};
	}

}(require('angular')));