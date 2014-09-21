(function (ng) {

  'use strict';

  module.exports = function (mod) {
    mod.factory('Key', F);
  };

  /**
   * @ngdoc factory
   * @module app.messages.composer
   * @name Key
   */
  function F () {
    function parseData (data) {
      try {
        data = ng.fromJson(data);
      } catch (e) {
        // ignore
      }
      return data;
    }
    return ({
      getValue: function (key) {
        key = parseData(key);
        if (typeof key === 'object') {
          return key.value;
        }
        return key;
      },
      getSpecials: function (key) {
        key = parseData(key);
        if (typeof key === 'object') {
          return key.specials.join(',');
        }
      }
    });
  }

}(require('angular')));