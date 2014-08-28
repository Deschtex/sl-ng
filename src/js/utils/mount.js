(function () {

	'use strict';

	/**
	 * Invokes all specified modules. This approach
	 * makes it possible to pass in arguments from
	 * the parent module, should it be neccessary.
	 * @param {Array|Function} modules A list of modules or single module.
	 */
	function mount (modules) {
		if ( ! Array.isArray(modules)) {
			modules = [modules];
		}
		for (var i in modules) {
			if (modules.hasOwnProperty(i)) {
				modules[i].call(null/*, args...*/);
			}
		}
	}

	module.exports = mount;

}());