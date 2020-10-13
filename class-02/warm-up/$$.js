'use strict';

const $$ = {

  map: function (structure, callback) {

    let results = null;

    if (!structure || !callback) return new Error('Invalid Argument');

    if (Array.isArray(structure)) {

      results = [];

      // iterate through the array and apply the callack to each value
      for (let i = 0; i < structure.length; i++) {
        results.push(callback(structure[i], i));
      }


    } else if (typeof structure === 'object') {

      results = {};

      for (let key in structure) {
        results[key] = callback(key, structure[key]);
      }

    } else {

      return new Error('Invalid structure');

    }

    return results;
  }
}

module.exports = $$;
