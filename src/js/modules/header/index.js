(function (ng) {

  'use strict';

  /**
   * @ngdoc module
   * @name app.header
   * @description
   *
   * # app.header
   *
   * The `app.header` module handles
   * the header part of the app.
   */
  ng.module('app.header', []).run(function () {
    console.log( '`app.header` init' );
  });

}(window.angular));