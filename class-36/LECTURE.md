# Class 36

## Review

- Pagination
- see diagrams

## Material UI

- New Component library
- See demo folder

## Redux

- Redux is a bit tricky.
  - Javascript's flexibility.
  - Add complexity so we don't have to add nay more.
  - Hooking it up is hard
- Global State management
  - Any values that parts of our UI need to function properly should be managed via a redux store.
  - Terminology
    - Store: A slice / chunk of data your application cares
      - messages
      - users / user
      - todos
    - Actions: an event that is triggered by your UI.
      - results in a global state update.
      - Someone interfaced with your app and the app needs to change.
      -  functions that returns a `type` and a `payload`
    - Reducers
      - a function, that tells the application what to do when an action / actions gets 'dispatched'
        - consumes actions
      - There is as many reducers as you have stores.


```js

// javascript reduce method

function handleReduce(acc, item) {/**... */}

[1, 2, 3, 4].reduce(handleReduce, {});


// redux reducer

const initialState = {};

const reducer = (action) => {

  // what is our new state going to contain

  return {
    name: 'Jacob',
    role: 'instructor',
  }

}

```

    - dispatch: the firing of an action.
