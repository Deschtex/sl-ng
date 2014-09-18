(function (ng) {

  'use strict';

  var mergeProps = ['_configBlocks', '_invokeQueue', '_runBlocks'];

  function lazyModule (name, req, conf) {
    var existingModule; // reference
    try {
      existingModule = ng.module(name);
    } catch (e) {
      // do nothing...
    }
    if (existingModule) {
      console.group('module `%s` already defined', name);
      var module = ng.module(name, req || [], conf);
      console.log(module === existingModule);
      for (var i = 0, prop; i < mergeProps.length; i++) {
        prop = existingModule[mergeProps[i]]; // get existing prop
        module[mergeProps[i]] = (prop || []).concat(
          module[mergeProps[i]] || [] // merge properties
        );
        console.log('merging props `%s`', mergeProps[i]);
      }
      console.groupEnd();
    } else {
      console.log('defining module `%s`', name);
      ng.module(name, req || [], conf);
    }
    return ng.module(name);
  }

  module.exports = lazyModule;

}(require('angular')));