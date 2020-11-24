# Class 32: Custom Hooks

## Warm Up

- Are 2 words Anagrams?
 - see warm-up folder

## Code Review

- Michael: Array with a hook?

```js

const [array, setArray] = useState([]);

function sortArray() {
  // arraySorting
  setArray(array.sort());
}

```

- Sara: Push something into array
  - Let's take during Code Review

```js

// let newArray = [...oldArray];

```

- Let's create a form 3 ways
  - Class based form
  - Functional Component
  - Custom Hook

## Custom Hooks

- Creating functionlity that any function component could use.
  - Before (function components and hooks) everything was attached to a class.
  - Function components don't need this requirement, they can import their logic from others files.
    - If that logic contains, useState, useEffect, other hooks from React, that becomes a custom hook

## Form Hook

- Class based form and a hook form.
