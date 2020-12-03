import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice.js';

export default configureStore({
  reducer: {
    pokemon: pokemonReducer,
  }
});
