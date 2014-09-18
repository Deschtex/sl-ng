(function (ng) {

  'use strict';

  var mount = require('utils/mount');

  //
  // Load sub-module components
  //
  var ctrl = require('./message.ctrl');
  var directive = require('./message.dir');

  /**
   * @ngdoc module
   * @name app.messages.message
   * @description
   *
   * # app.messages.message
   *
   * The `app.messages.message` module handles
   * the messages message item.
   */
  var mod = ng.module('app.messages.message', []);

  //
  // Mount sub-module components
  //
  mount([ctrl, directive], mod);

}(require('angular')));