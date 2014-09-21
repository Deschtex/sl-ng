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
        <span class="key__specials">{{getSpecials(key)}}</span>\
      ',
      controller: 'KeyCtrl',
      link: function (scope, element, attrs, ctrl) {
        element.bind('touchstart', function () {
          ctrl.showValue(element.scope());
          this.__timer = $timeout(function () {
            ctrl.showSpecials(element.scope());
          }, 500);
        });
        element.bind('touchend', function () {
          $timeout.cancel(this.__timer);
          ctrl.hideSpecials();
        });
        scope.$on('$destroy', function () {
          element.unbind('touchstart');
          element.unbind('touchend');
        });
      }
    };
  }

}(require('angular')));