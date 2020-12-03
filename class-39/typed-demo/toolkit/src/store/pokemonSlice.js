import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

let apiUrl = 'https://pokeapi.co/api/v2/pokemon';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    count: 0,
    results: [],
    previous: null,
    next: null,
    selectedPokemon: {},
  },
  // define the ways in which our actions will update the state above
  reducers: {
    SET: (state, action) => {
      for (let prop in action.payload) {
        state[prop] = action.payload[prop];
      }
    },
    SELECT: (state, action) => {
      state.selectedPokemon = action.payload;
    }
  }
});

// our actinos functions created via the slice.
export const { SET, SELECT } = pokemonSlice.actions;


// this is sort of like an action, but it's really jest a wrapper to handle async operations
export const fetchPokemon = (url = apiUrl) => async dispatch => {
  const response = await axios.get(url);
  dispatch(SET(response.data));
}

export const selectPokemon = (url) => async dispatch => {
  const response = await axios.get(url);
  dispatch(SELECT(response.data));
}

export default pokemonSlice.reducer;
