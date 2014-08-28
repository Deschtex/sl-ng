(function (ng) {

	'use strict';

	var mount = require('utils/mount');

	//
	// Load third-party cache
	// 
	require('angular-cache/src');
	//
	// Load module components
	//
	var datetime = require('./datetime.flt');
	var eventlist = require('./eventlist.srv');
	var eventbus = require('./eventbus.srv');
	var cache = require('./cache.srv');

	/**
	 * @ngdoc module
	 * @name app.core
	 * @description
	 *
	 * # app.core
	 *
	 * The `app.core` module handles
	 * the core parts of the app.
	 */
	ng.module('app.core', [
		'angular-data.DSCacheFactory'
	])
	.config([
		'DSCacheFactoryProvider',
		function ($cacheProvider) {
			$cacheProvider.setCacheDefaults({
				cacheFlushInterval: 4500000,
				deleteOnExpire: 'aggressive',
				storageMode: 'localStorage'
			});
		}
	])
	.run(function () {
		console.log( '`app.core` init' );
	});

	//
	// Mount module components
	// 
	mount([datetime, eventlist, eventbus, cache]);

}(require('angular')));