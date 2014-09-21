(function (ng) {

  'use strict';

  module.exports = function (mod) {
    mod.controller('MessageCtrl', ['$scope', F]);
  };

  /**
   * @ngdoc controller
   * @module app.messages.message
   * @name MessageCtrl
   */
  function F ($scope) {
    $scope.getTypeClass = function (message) {
      return 'message--' + message.type;
    };
    $scope.getSelectedClass = function (me ssage) {
      return $scope.isSelected(message) && 'is-selected';
    };
    function select (message) {
      $scope.$parent.selectedMessage = message;
    }
    function setActionsSettings (settings) {
      $scope.$parent.actionsSettings = settings;
    }
    return ({ // exposed API
      select: select,
      setActionsSettings: setActionsSettings
    });
  }

}(require('angular')));