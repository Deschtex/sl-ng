(function (ng) {

  'use strict';

  module.exports = function (mod) {
    mod.directive('messageActions', ['$timeout', F]);
  };

  /**
   * @ngdoc directive
   * @module app.messages.actions
   * @name messageCopy
   */
  function F ($timeout) {
    return ({
      restrict: 'E',
      template: '\
        <div class="message-actions__buttons">\
          <a href="#" class="buttons__copy">Copy</a>\
          <a href="#" class="buttons__more">More...</a>\
        </div>\
      ',
      controller: 'MessageActionsCtrl',
      link: function (scope, element, attrs, ctrl) {
        element.bind('touchstart', function () {
          element.addClass('is-active');
        });
        element.bind('touchend', function () {
          $timeout(function () { // slight delay
            element.removeClass('is-active');
            scope.selectedMessage = null;
          }, 200);
        });
        scope.$watch('selectedMessage', function (val) {
          ctrl.setActionsVisibility(val ? true : false);
        });
        scope.$watch('actionsSettings', function (obj, obj2) {
          if ( ! ng.equals(obj, obj2)) { // post-init only
            ctrl.setActionsPosition(obj.pos, obj.width);
          }
        });
        scope.$on('$destroy', function () {
          element.unbind('touchstart');
          element.unbind('touchend');
        });
      }
    });
  }

}(require('angular')));