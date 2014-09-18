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
  var datetime  = require('./datetime.flt')
    , eventlist = require('./eventlist.srv')
    , eventbus  = require('./eventbus.srv')
    , cache     = require('./cache.srv');

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
  var mod = ng.module('app.core', [
    'angular-data.DSCacheFactory'
  ])
  .config([
    'DSCacheFactoryProvider',
    function ($cacheProvider) {
      // configure third-party cache
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
  mount([datetime, eventlist, eventbus, cache], mod);

}(require('angular')));