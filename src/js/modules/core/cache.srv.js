(function (ng) {

  'use strict';

  module.exports = function (mod) {
    mod.factory('Cache', ['DSCacheFactory', F]);
  };

  /**
   * @ngdoc factory
   * @module app.core
   * @name Cache
   */
  function F (DSCacheFactory) {
    return ng.extend(DSCacheFactory, {
      create: function (/*args...*/) {
        return this.apply(this, arguments);
      }
    });
  }

}(require('angular')));