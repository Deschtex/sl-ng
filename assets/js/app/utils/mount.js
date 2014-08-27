'use strict';

module.exports = function (comps) {
	if ( ! Array.isArray(comps)) {
		comps = [comps];
	}
	for (var i in comps) {
		if (comps.hasOwnProperty(i)) {
			comps[i]();
		}
	}
};