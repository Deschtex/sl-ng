(function (ng) {

	'use strict';

	module.exports = function () {
		ng.module('app.core').factory('EventList', F);
	};

	function F () {
		return {
			SWITCH_VIEW: 'switch-view',
			BEFORE_SWITCH_VIEW: 'before-switch-view',
			AFTER_SWITCH_VIEW: 'after-switch-view',
			DIALOGUE_SELECTED: 'dialogue-selected'
		};
	}

}(require('angular')));