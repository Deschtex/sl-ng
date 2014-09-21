(function (ng) {

  'use strict';

  var mount = require('utils/mount');

  //
  // Load sub-module components
  //
  var ctrl = require('./search.ctrl');
  var directive = require('./search.dir');

  /**
   * @ngdoc module
   * @name app.dialogues.search
   * @description
   *
   * # app.dialogues.search
   *
   * The `app.dialogues.search` module handles
   * the dialogues search bar.
   */
  var mod = ng.module('app.dialogues.search', []);

  //
  // Mount sub-module components
  //
  mount([ctrl, directive], mod);

}(require('angular')));