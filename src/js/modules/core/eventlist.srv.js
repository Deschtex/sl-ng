(function (ng) {

  'use strict';

  module.exports = function (mod) {
    mod.factory('EventList', F);
  };

  /**
   * @ngdoc factory
   * @module app.core
   * @name EventList
   */
  function F () {
    return {
      DIALOGUE_SELECTED: 'dialogues:dialogue-selected'
    };
  }

}(require('angular')));