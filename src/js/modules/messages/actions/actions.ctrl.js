(function (ng) {

  'use strict';

  module.exports = function (mod) {
    mod.controller('MessageActionsCtrl', ['$scope', F]);
  };

  /**
   * @ngdoc controller
   * @module app.messages.actions
   * @name MessageActionsCtrl
   */
  function F ($scope) {
    /**
     * Holds the position for the actions popup.
     * @type {Object}
     */
    $scope.actionsPosition = { left: 0, top: 0 };
    /**
     * Sets the visibility of the actions popup.
     * @param {Boolean} flag
     */
    function setActionsVisibility (flag) {
      $scope.isActionsVisible = flag;
    }
    /**
     * Calculates and sets the position of the actions popup.
     * @param {Object} pos An object with `top` and `left`.
     * @param {Integer} width Width of the message, in px.
     */
    function setActionsPosition (pos, width) {
      var message = $scope.selectedMessage;
      var offset = message.type === 'in' ? 8 : -8;
      var left = pos.left + width / 2 - 45;
      $scope.actionsPosition = {
        left: left + offset + 'px',
        top: pos.top - 210 + 'px'
      };
    }
    return ({ // exposed API
      setActionsVisibility: setActionsVisibility,
      setActionsPosition: setActionsPosition
    });
  }

}(require('angular')));