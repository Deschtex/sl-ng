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
    $scope.getSelectedClass = function (message) {
      return $scope.isSelected(message) && 'is-selected';
    };
    $scope.getTypeClass = function (message) {
      return 'message--' + message.type;
    };
    function select (message) {
      $scope.$parent.selectedMessage = message;
    }
    function setCopyButtonSettings (settings) {
      $scope.$parent.actionsSettings = settings;
    }
    return ({ // exposed API
      select: select,
      setCopyButtonSettings: setCopyButtonSettings
    });
  }

}(require('angular')));