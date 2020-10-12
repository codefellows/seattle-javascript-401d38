# Class 01

## Introductions

- Where you're from?
- Previous life before Code Fellows (before you were a developer)?
- One fun / nerdy fact?

## Course Specifics

- Canvas
- Github Repo
  - Make sure you fork and add an upstream
  - git remote add upstream https://github.com/codefellows/seattle-javascript-401d38.git
- Remo
  - Virtual Campus
- Front Row
  - Lecture videos published here
  - https://frontrowviews.com/Home/Home/Index

## Prep Assignments

- Turning in assignments
  - Get things in when deadlines are there.
    - Quality is not a priority.
  - Refections are for your learning term learning success.

## Node Ecosystem

- Browser has the ability to run Javascript.
- Our own machines will be using Node to run our Javascript ( in 401 ).
  - What is Node.js?
    - Different environment!
      - the thing that gives us all our tools.
    - Our applications Backend!
    - CRUD operations!
    - Runtime engine

```js
// Browser environment

var element = document.getElementById('someid');
console.log(document); // document object is given to us by the browser ( the environment for our code )

// Node environment

var element = document.getElementById('someid'); // reference error: document is undefined

console.log(process); // a global object that contains information about node specific

```

## Node Modules

- What is a node modules?
  - All the packages we download are in fact
  - Most 3rd libraries are stored in a folder called `node_modules`
  - Organizing code in a specific way.
  - Community driven.
    - Things like npm, which manage published node_modules
  - A small self contained library of code.
    - utilize a specific syntax in order to let our libraries run in the Node environment.

```js
// person.js
module.exports = {} // the things that Node packages up for us.

// in another file...

const person = {
  name: 'Jacob',
}

person.walk = function() {
  return `${this.name} is walking`;
}

module.exports = person;

```

```js
// index.js

// node specific function `require`
const person = require('./lib/person.js');

console.log(person.walk());

```

## NPM

- Node Package Manager
- Software designed to help developer create, maintain, and share js node_modules.
- `npm init`
- `npm install`

## Node and the Command Line

- A special property on the process object called: `process.argv`
