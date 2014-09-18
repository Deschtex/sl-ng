(function (ng) {

  'use strict';

  module.exports = function (mod) {
    mod.directive('key', ['$timeout', F]);
  };

  /**
   * @ngdoc directive
   * @module app.messages.composer
   * @name key
   */
  function F ($timeout) {
    return {
      restrict: 'E',
      template: '\
        <span class="key__value">{{getValue(key)}}</span>\
        <span class="key__extras">{{getExtras(key)}}</span>\
      ',
      controller: 'KeyCtrl',
      link: function (scope, element, attrs, ctrl) {
        element.bind('touchstart', function () {
          ctrl.showValue(element.scope());
          this.__timer = $timeout(function () {
            ctrl.showExtras(element.scope());
          }, 500);
        });
        element.bind('touchend', function () {
          $timeout.cancel(this.__timer);
        });
      }
    };
  }

}(require('angular')));