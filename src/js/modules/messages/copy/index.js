(function (ng) {

	'use strict';

	var mount = require('utils/mount');

	//
	// Load sub-module components
	// 
	var ctrl = require('./copy.ctrl');
	var directive = require('./copy.dir');
	
	/**
	 * @ngdoc module
	 * @name app.messages.copy
	 * @description
	 *
	 * # app.messages.copy
	 *
	 * The `app.messages.copy` module handles 
	 * the messages copy button.
	 */
	ng.module('app.messages.copy', []);

	//
	// Mount sub-module components
	// 
	mount([ctrl, directive]);

}(require('angular')));