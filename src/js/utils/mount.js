(function () {

	'use strict';

	/**
	 * Invokes all specified components. This approach
	 * makes it possible to pass in arguments from
	 * the parent module, should it be neccessary.
	 * @param {Array|Function} comps A list of components or single module.
	 * @param {Object} mod Module to mount to
	 */
	function mount (comps, mod) {
		if ( ! Array.isArray(comps)) {
			comps = [comps];
		}
		for (var i in comps) {
			if (comps.hasOwnProperty(i)) {
				comps[i].call(null, mod);
			}
		}
	}
	
	module.exports = mount;

}());