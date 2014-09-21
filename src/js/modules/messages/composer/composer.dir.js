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
      template: '\
        <div class="message-composer__input">\
          <input type="text" placeholder="iMessage">\
        </div>\
        <div class="message-composer__keyboard">\
          <key ng-repeat="key in keys"></key>\
        </div>\
      ',
      controller: 'MessageComposerCtrl',
      link: function (scope, element, attrs, ctrl) {
      }
    };
  }

}(require('angular')));