(function (ng) {

  'use strict';

  //
  // Load main app modules
  //
  require('./modules/core');
  require('./modules/dialogues');
  require('./modules/messages');

  /**
   * @ngdoc module
   * @name app
   * @description
   *
   * # app (core module)
   *
   * The `app` module is the module being
   * loaded by the page and requires all
   * other neccessary app modules.
   */
  ng.module('app', [
    'app.core',
    'app.dialogues',
    'app.messages'
  ])
  .run(function () {
    console.log( '`app` init' );
  });

}(require('angular')));