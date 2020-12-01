// Tells our App what reducers we need to use to manage our application
import { createStore, combineReducers } from 'redux'; // eats reducers and creates stores with states.
import { composeWithDevTools } from 'redux-devtools-extension'; // this just helps our browser see our store

// these are the reducers that will manage our store.
import voteReducer from './votes/votes-reducer.js';
import candidatesReducer from './candidates/candidates-reducer.js';

// all the magic happends
const reducers = combineReducers({
  votes: voteReducer,
  candidates: candidatesReducer,
});

// create this funciton to be run when we feed it to our Provider
const store = () => {
  return createStore(reducers, composeWithDevTools()); // add reducers and middleware to our createStore function
}

export default store;

