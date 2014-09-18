(function (ng) {

  'use strict';

  var mount = require('utils/mount');

  //
  // Load sub-module components
  //
  var ctrl = require('./dialogue.ctrl');
  var directive = require('./dialogue.dir');
  var service = require('./dialogue.srv');

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
  var mod = ng.module('app.dialogues.dialogue', []);

  //
  // Mount sub-module components
  //
  mount([ctrl, directive, service], mod);

}(require('angular')));