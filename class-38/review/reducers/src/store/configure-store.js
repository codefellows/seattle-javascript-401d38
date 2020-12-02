import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import RivaSpencerReducer from './reducers/riva-spencer.js';

const reducers = combineReducers({
  products: RivaSpencerReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store;
