(function (ng) {

	'use strict';
	
	/**
	 * @ngdoc module
	 * @name app.links
	 * @description
	 *
	 * # app.links
	 *
	 * The `app.links` module handles
	 * the links view of the app.
	 */
	ng.module('app.links', []).run(function () {
		console.log( '`app.links` init' );
	});

}(window.angular));