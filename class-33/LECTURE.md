# Class 33: Context API

## Warm Up

- Function that parses camelCase strings and returns the number of words in the string.

```javascript

// Czarl
// expect input to be a string, return 0 

camelCase(12376834)  // 0;

// Sara
// a string of giberish, what should the function do

camelCase('sadfhiuaFewuufhHHF') // 2 ?

// how should i deal with this?


// Rizo
// what about super long string

camelCase('oiajwefkjasduifhalejfnoauihsdaklsjfoiajseoriHfoiasdjfhisadfaisfgauyfgausyf') // return 0

// should be able long string, and find the camel case pieces

camelCase('how many words are camel case') // 0

camelCase('what about theseWords'); // 2 || 0

camelCase('NotACamelCaseWord') // 0

camelCase('') // 0

```

## Code Review

- Custom `useAjax`
  - Sara: useChange doesn't fire when we autopopulate
    - form events are very strict, if typing is no happening the useChange will not fire.
    - Blank form, start typing and autopopulate options into form input / component state.
      - the component state and the input value are equal.
  - Robert: json-server
    - Getting count and results on json-server.
    - Typically uses javascript file, uses the json-server and makes changes to the intialized.
  - Bryant: hard coded into a component?
    - No error when render, but no display.
  - Riva: Retakes / final schedules.


## Context API

- Components that share a set of data.
  - Provider: define a shared 'state' for any of its children, the children can simply opt-in to access the data, without needing a direct props from the parent.
    - We deifintely still want small pieces of data passed donw through props.
  - Each child that wants to subscribe to the `context` jsut needs to import a `Consumer` component that subscribes to a given provider.
