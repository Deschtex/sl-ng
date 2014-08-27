(function (ng) {

	'use strict';

	var mount = require('utils/mount');

	//
	// Load sub-module components
	// 
	var ctrl = require('./message.ctrl');
	var directive = require('./message.dir');
	
	/**
	 * @ngdoc module
	 * @name app.dialogues.dialogue
	 * @description
	 *
	 * # app.dialogues.dialogue
	 *
	 * The `app.dialogues.dialogue` module handles 
	 * the dialogues dialogue item.
	 */
	ng.module('app.messages.message', []);

	//
	// Mount sub-module components
	// 
	mount([ctrl, directive]);

}(require('angular')));