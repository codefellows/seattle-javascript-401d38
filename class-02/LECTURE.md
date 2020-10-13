# Class 01

## Warm Up

- Map method
  - new structure to hold our 'results'.
  - make sure our arguments exist.
  - does our callback return expected new array?
    - error handling
  - Iterate through our structure (forEach, for loop, while loop)
    - return / push values into 'results'.
      - gauranteeing our return is of a specific type.
      - account for the callback: pushing the result of the callback and the value

```js
for (let key in object) {
  object[key]
  
```

### Jest Test crash course

- create a folder called `__tests__` at project root
- include `"test": "jest --coverage --verbose` in your package.json

## Code Review

- Let's go through the lab prompt.
- Requirements
  - Getting input from the user via a command line.
    - process.argv gets our user input
  - We need to output some feedback to the user.
    - could simply be the text that the user gave.
  - test case: `node nodes.js --add "This is a really cool thing that I wanted to remember for later"` => `Adding Note: This is a really cool thing that I wanted to remember for later`
- Modules
  - index: entry file that will use our modules
  - input: constructor module for accepting a command and some data for the command
  - notes: constructor module for executing an operation on a given 'input'.
    - needs a method called add: which creates a note (id / text) ( console log an object text).

## Function and Class Based ( Object Oriented ) Design Patterns

### Functional

- Think of every function like a math equation.
  - One side => other side
  - The return value is always going to be the saem given the same inputs.
  - Immutablity (dont change anything regarding your inputs);

```js

let array = [1,2,3,4];

let reversedArray = reverse(array);
// 1 + 1 = 2;

console.log(array)// => [1,2,3,4]


// we want the operation to be immutable
function badReverse (array) {

  let results = [];

  array.push();

  return results;
}

// side effect => anything that is not the inteded result
// keeps our modules clean, and easier to maintian and scale.
function sum(a,b) {
  console.log(a, b) // side effect
  return a * b;
}

// Composing higher order functions
// a function that returns another function
function greeting(person) {
  return function(string) {
    return 'hello ' + person + ' ' + string;
  }
}


// console.log(JacobGreeting('nice weather'));

// same thing as above
const greeting = (person) => (string) => 'hello ' + person + ' ' + string;
const JacobGreeting = greeting('Jacob');

// function currying
console.log(JacobGreeting('nice weather'));

```

### Object Oriented

- We are creating new objects from a class of thing.
  - Name a class
    - define properties
    - define methods
      - these functions can mutate object without fear of distupting the essense of a class.
  - created object literals using that class


```js

// old way of object orienting
function Instructor(name, language) {
  this.name = name;
  this.language = languge;
}

Instructor.prototype.teach = function() {
  // mutations can occur withour fear of disrupting something outside of this instantiated object.
  this.name = this.name.toUpperCase();
}

// new way

class Instructor {

  constructor(name, language) {
    this.name = name;
    this.language = language;
  }


  teach() {
    this.name = this.name.toUpperCase();
  }

}

class ta extends Instructor() {
  constructor(name, language) {
    super(name, langauge);
  }
}

const Jacob = new Instructor('Jacob', 'javascript');
Jacob.teach();

```
