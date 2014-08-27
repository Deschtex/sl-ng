(function (ng) {

	'use strict';

	var moment = require('moment');

	module.exports = function () {
		ng.module('app.core').filter('datetime', F);
	};

	/**
	 * @ngdoc filter
	 * @module app.core
	 * @name datetime
	 */
	function F () {
		var weekdays = [
			's\xf6ndag', 'm\xe5ndag', 'tisdag', 'onsdag',
			'torsdag', 'fredag', 'l\xf6rdag'
		];
		return function (timestamp, format) {
			var time = moment(timestamp);
			if (format === 'long') {
				return time.format('D MMM YYYY HH:mm');
			} else if (format === 'short') {
				var diff = moment().diff(time, 'days');
				if (diff >= 8) { // 1 week+
					return time.format('YYYY-MM-DD');
				} else if (diff > 1 && diff <= 7) { // within a week, excl. yesterday
					return weekdays[time.day()];
				} else if (diff === 0) { // today
					return time.format('HH:mm');
				} else if (diff === 1) {
					return 'igår'; // yesterday
				}
			}
		};
	}

}(require('angular')));