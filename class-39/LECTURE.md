# Class 39: Redux Design Patterns

## Warm Up

- Creating our own render method.
- See the `warm-up` folder.

## Review

- Material-UI
- Actions / Reducers
- Thunk / Middleware

- Redux
  - state: current data that our entire application uses.
  - actions: how the application wants to interact with the state.
  - reducers: Take in an action => and actually decides how the action will change store state.

- MapStateToProps: assigning values to component props
- MapDispatchToProps: takes functions that can perform operations on the store, via the reducer.
  - These are both things, (one function and one object) that configure a component.
  - Connect takes these and when the component is mounted, the component becomes aware of the store and can see and use actions that affect.


```jsx

import { connect } from 'react-redux';

funcition List(props) {

  const [item, setItem] = useState([]);

  return ...

}

// any component that wants to subscribe to redux store functionality should connect
export default connect(thingsToAttachToProps)(List);


```

## Redux Design Patterns

- We haven't really had a design pattern in mind.
  - Really loose pattern of:
    1) configure the store
       - importing functions from redux
    2.a) Create Reducer / initial state
      - Add it to the store configure
    2.b) Create our Actions
      - Configure components by mapping these function to our component Props
- Ducks
  - Put all your reducers / actions / constants in one enourmous file.
- GraphQL
  - Make querying data a little bit SQL.
  - query only the state property that you wanted to update
- MobX
  - Simplifying the complex Redux workflow
  - Used classes and methods.
  - Each 'action' is a method defined on a class.

```js
// pokemon.duck.js

//*
* Constants
*/

const FETCH_DATA = 'FETCH_DATA';
const ADD_DATA = 'ADD_DATA';
....

/**
* actions
*/

const addData = (data) => {
  return {
    type: ADD_DATA,
    payload: data,
  }
}

/**
* Reducer
*/

```

- Enter Redux Toolkit

## Redux Toolkit

- Prescriptive Design pattern for redux
- No more ambiguity of how to configure a store
- No more installing middleware, configure redux thunk, no more extra async store.
- Everything lives in one file.
- Uses hooks to call out to redux store stuff.
  - No more connect to a store, just call function that come from a 'slice'
  - Now a section of our global state is called a 'slice'
  - Prebuilt method called 'createSlice'
  - All the features that we defined as functions in their file, now come directly from the `slice` object.
  - We define all the functionality using methods, similar to defining methods on a es6 class.
- Now we are doing things in a very opinonated.
- If we need to modify how things work, we now have to do more work.
