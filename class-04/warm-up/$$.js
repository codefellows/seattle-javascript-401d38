const $$ = {

  // function signature with our 3 parameters
  reduce: function (arrayOrObject, callback, accumulator) {

    // I don't usually like setting to values that I don't know their type
    // if we get a type that is an object is an array / object we could cause a mutation.
    // let result = accumulator;

    if (!arrayOrObject || !callback || !accumulator) {
      return new Error('Invalid arguments');
    }

    // iterate over the values here, and pass the result of the callback into the accumulator
    // let keysOrIndexes = Object.keys(arrayOrObject);
    for (let item in arrayOrObject) {
      let idx = 0;
      // is this an array or is this an object??
      accumulator = Array.isArray(arrayOrObject) ? callback(accumulator, arrayOrObject[item], item) : callback(accumulator, item, arrayOrObject[item], idx);
      idx += 1;
      // accumulator = callback(arrayOrObject[item]);
    };

    return accumulator;
  }
}

let array = [1, 2, 3, 4];
let sum = $$.reduce(array, (accumulator, val, idx) => {
  accumulator = accumulator + val;
  return accumulator;
}, 1);

console.log(sum);

let weather = {
  hot: true,
  sunny: false,
  windy: true,
  morning: false,
  smoggy: true
};

let facts = $$.reduce(weather, (acc, key, value, idx) => {
  if (weather[key] === true) {
    acc.push(key);
  }
  return acc;
}, []);

console.log(facts);
