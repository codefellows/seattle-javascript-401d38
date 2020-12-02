import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// We know import this and add it to our createStore function, wrapped in applyMiddleware
import thunk from 'redux-thunk';

import listReducer from './list-reducer.js';
import selectReducer from './select-reducer.js';

const reducers = combineReducers({
  pokedex: listReducer,
  selectedPokemon: selectReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store;
