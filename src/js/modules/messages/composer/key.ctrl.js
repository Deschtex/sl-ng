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
    $scope.getSpecials = function (key) {
      return Key.getSpecials(key);
    };
    function showValue (scope) {
      console.log('showing value...', scope.key);
    }
    function showSpecials (scope) {
      console.log('showing specials...', scope.key);
    }
    function hideSpecials () {
      console.log('hiding specials...');
    }
    return ({ // exposed API
      showValue: showValue,
      showSpecials: showSpecials,
      hideSpecials: hideSpecials
    });
  }

}(require('angular')));