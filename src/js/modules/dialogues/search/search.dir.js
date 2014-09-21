(function (ng) {

  'use strict';

  module.exports = function (mod) {
    mod.directive('dialogueSearch', F);
  };

  /**
   * @ngdoc directive
   * @module app.dialogues.search
   * @name dialogueSearch
   */
  function F () {
    return {
      restrict: 'E',
      template: '\
        <input type="text" class="dialogue-search__input">\
      ',
      controller: 'DialogueSearchCtrl',
      link: function (scope, element, attrs, ctrl) {
      }
    };
  }

}(require('angular')));