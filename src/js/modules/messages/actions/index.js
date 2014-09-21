(function (ng) {

  'use strict';

  var mount = require('utils/mount');

  //
  // Load sub-module components
  //
  var ctrl = require('./actions.ctrl');
  var directive = require('./actions.dir');

  /**
   * @ngdoc module
   * @name app.messages.actions
   * @description
   *
   * # app.messages.actions
   *
   * The `app.messages.actions` module handles
   * the messages actions button.
   */
  var mod = ng.module('app.messages.actions', []);

  //
  // Mount sub-module components
  //
  mount([ctrl, directive], mod);

}(require('angular')));