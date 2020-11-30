import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


// store need reducer functions to know how to manage state

import people from './people-reducer.js'

// you only need to do this if have multuple slices of your store
// for the most part you'll always want to include
let reducers = combineReducers({
  people
});

// export a function that returns the createStore(reducer);
const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store;
