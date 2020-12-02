# Class 38: Redux Thunk

## Warm Up

- Creating actions and reducers that work togther to update an object literal: {}

## Code Review

- Adding our Reducers to our store config.
- Importing our actions from action files and using them with our connected components.

## Redux Middleware

- Any js operation that we want to occur between the action getting called, and the reducer interpretting the action, is a piece of reduc middleware.

## Use Thunk to create Async Actions

- asynchronous actions don't return at given time, so it's hard to have an action return an object in the order that redux.
  - action => {} => reducer => newState
    - If our action does something asynchronous we have to wait before we activate our reducer.
- In order to force our our reducer to wait, we apply some middleware
  - If an action is fired, and it doens't return an object, we are going to assume that it's a function that can take a callback.
    - a function, that gets called by anther function / higher order thing.
    - Our async action is going to return a callback that has `dispatch` as a parameter, so that we can call the reducer dispatch function with the action creator necessary. 
