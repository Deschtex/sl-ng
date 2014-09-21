(function (ng) {

  'use strict';

  module.exports = function (mod) {
    mod.controller('KeyCtrl', ['$scope', 'Key', F]);
  };

  /**
   * @ngdoc controller
   * @module app.messages.composer
   * @name KeyCtrl
   */
  function F ($scope, Key) {
    $scope.getValue = function (key) {
      return Key.getValue(key);
    };
    $scope.getExtras = function (key) {
      return Key.getExtras(key);
    };
    function showValue (scope) {
      console.log('showing value...', scope.key);
    }
    function showExtras (scope) {
      console.log('showing extras...', scope.key);
    }
    function hideExtras () {
      console.log('hiding extras...');
    }
    return ({ // exposed API
      showValue: showValue,
      showExtras: showExtras,
      hideExtras: hideExtras
    });
  }

}(require('angular')));