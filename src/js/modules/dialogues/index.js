(function (ng) {

  'use strict';

  var mount = require('utils/mount');

  //
  // Load sub-modules
  //
  require('./dialogue');

  /**
   * @ngdoc module
   * @name app.dialogues
   * @description
   *
   * # app.dialogues
   *
   * The `app.dialogues` module handles
   * the dialogues view of the app.
   */
  var mod = ng.module('app.dialogues', [
    'app.dialogues.dialogue' // Dialogue item sub-module
  ])
  .run(function () {
    console.log( '`app.dialogues` init' );
  });

  //
  // Mount module main controller
  //
  mount(require('./controller'), mod);

}(require('angular')));