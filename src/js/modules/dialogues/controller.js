(function (ng) {

  'use strict';

  var cfg = require('config');

  module.exports = function (mod) {
    mod.controller('DialoguesCtrl', [
      '$scope', '$http', 'Cache', F.bind(mod)
    ]);
  };

  /**
   * @ngdoc controller
   * @module app.dialogues
   * @name DialoguesCtrl
   */
  function F ($scope, $http, Cache) {
    /**
     * Global cache for the dialogues module.
     * @type {Object}
     */
    $scope.cache = Cache.create(this.name);
    /**
     * Holds the currently selected dialogue,
     * which is used to determine which dialogue
     * should be highlighted and not.
     * @type {Object}
     */
    $scope.selectedDialogue = null;
    /**
     * Determines if dialogue is selected or not.
     * @param  {Object} dialogue
     * @return {Boolean}
     */
    $scope.isSelected = function (dialogue) {
      return $scope.selectedDialogue === dialogue;
    };
    //
    // Load dialogues and cache them
    //
    $http.get(cfg.dialoguesDataURL, {
      cache: Cache.get(this.name)
    })
    .success(function (dialogues) {
      $scope.dialogues = dialogues;
    });
  }

}(require('angular')));