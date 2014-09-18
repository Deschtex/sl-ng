(function (ng) {

  'use strict';

  var mount = require('utils/mount');

  //
  // Load sub-modules
  //
  require('./message');
  require('./copy');
  require('./composer');

  /**
   * @ngdoc module
   * @name app.messages
   * @description
   *
   * # app.messages
   *
   * The `app.messages` module handles
   * the messages view of the app.
   */
  var mod = ng.module('app.messages', [
    'app.messages.message', // Message item sub-module
    'app.messages.copy',    // Message copy button sub-module
    'app.messages.composer' // Message composer sub-module
  ])
  .run(function () {
    console.log( '`app.messages` init' );
  });

  //
  // Mount module main controller
  //
  mount(require('./controller'), mod);

}(require('angular')));