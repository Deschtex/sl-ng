(function (ng) {

	'use strict';

	var mount = require('utils/mount');

	//
	// Load sub-module components
	//
	var composerCtrl	= require('./composer.ctrl')
		, composerDir		= require('./composer.dir')
		, keyCtrl				= require('./key.ctrl')
		, keyDir				= require('./key.dir')
		, keySrv				= require('./key.srv');

	//
	// Setup sub-module component groups
	//
	var composer = [composerCtrl, composerDir]
		, key	= [keyCtrl, keyDir, keySrv];

	/**
	 * @ngdoc module
	 * @name app.messages.composer
	 * @description
	 *
	 * # app.messages.composer
	 *
	 * The `app.messages.composer` module handles
	 * the message composer (input & keyboard).
	 */
	var mod = ng.module('app.messages.composer', []);

	//
	// Mount sub-module components
	//
	mount([composer, key], mod);

}(require('angular')));