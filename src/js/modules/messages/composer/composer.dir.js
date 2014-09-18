(function (ng) {

  'use strict';

  module.exports = function (mod) {
    mod.directive('messageComposer', F);
  };

  /**
   * @ngdoc directive
   * @module app.messages.composer
   * @name messageComposer
   */
  function F () {
    return {
      restrict: 'E',
      controller: 'MessageComposerCtrl',
      link: function (scope, elem, attrs, ctrl) {
      }
    };
  }

}(require('angular')));