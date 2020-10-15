# Class-04

## Warm Up

- Continue the Shredder library

```js

const $$ = {

  // function signature with our 3 parameters
  reduce: function(arrayOrObject, callback, accumulator) {

    // I don't usually like setting to values that I don't know their type
    // if we get a type that is an object is an array / object we could cause a mutation.
    // let result = accumulator;

    if (!arrayOrObject || !callback || !accumulator) {
      return new Error('Invalid arguments');
    }

    // iterate over the values here, and pass the result of the callback into the accumulator
    // let keysOrIndexes = Object.keys(arrayOrObject);
    for (let item in arrayOrObject) {

      callback(accumulator, )

      console.log(arrayOrObject[item]);
    };
  }
}


```

## Code Review of Notesy

- Features
  - Node Module that is meant to be run in the terminal.
    - `module.exports` : the way for node to make something available to other modules / files / piece of your system.
    - `require()` : setting a dependency, specifying an import
        - inverse of exporting.
        - Run all the code in the file / path specified.
        - returns whatever value is set to `module.exports`
  - Uses 2 classes `Input` and `Notes`
    - What is a class in js?
      - A blueprint for objects
      - Syntactic sugar / does the same exact thing as a constructor function.
      - An attempt to make it's object oriented features more apparent to someone that is used to a class based language.
    - Functional Programming:
      - Each function has a specific job, functions do their job and return a value.
      - Side Effect, we want to to reduce as much as possible.
        - These could potentially for other functions in our runtime environment.
      - Immutability, functions should not mutate variables / values that don't need to be changed.
        - process values / don't change values / and simply return the output of an operation.
        - When things start to mutate, we begin to introduce "state".
      - Higher Order Functions
        - Function that return other functions
  - Includes tests for both modules
  - Can persist notes in a Mongo Database.

## Advanced Mongo / Mongoose Design Patterns

## Mocking a Mongo Database
- Connecting to a fake mongo database, in order to make sure that our code can connect to mongo in a test environment
  - `supergoose`
  - Mock functions that mongosee would typically use
    - Add the methods that we would expect a library, and just make them return something we can expect.

```js

// mongoose method

notes.find({}).then(notes => console.log);


// mocked version
notes.find({}).then(notes => console.log); // this returns fake data instead of the real solution that requires another system to complete

```

- Tif: googled supergoose, supergoose library docs hard to find / reference
  - try this one: https://github.com/rkgallaway/cf-supergoose/blob/master/supergoose.js
