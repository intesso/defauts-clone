/*!
 * defaults-deep <https://github.com/jonschlinkert/defaults-deep>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 *
 * Modified by @andineck: removed lazy dependency in order to make it runnable with browserify
 *
 */

'use strict';

var isExtendable = require('is-extendable');
var forOwn = require('for-own');


function defaultsDeep(target, objects) {
  target = target || {};

  function copy(target, current) {
    forOwn(current, function (value, key) {
      var val = target[key];
      // add the missing property, or allow a null property to be updated
      if (val == null) {
        target[key] = value;
      } else if (isExtendable(val) && isExtendable(value)) {
        defaultsDeep(val, value);
      }
    });
  }

  var len = arguments.length, i = 1;
  while (i < len) {
    var obj = arguments[i++];
    if (obj) {
      copy(target, obj);
    }
  }
  return target;
};

/**
 * Expose `defaultsDeep`
 */

module.exports = defaultsDeep;
