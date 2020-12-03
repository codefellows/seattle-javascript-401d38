import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPokemon, selectPokemon } from '../store/pokemonSlice.js';

import Chip from '@material-ui/core/Chip';

export default function Pokemon() {

  // select some data from state and assign it to a variable
  const pokemonData = useSelector((state) => state.pokemon.results);
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const dispatch = useDispatch();

  const handleSelect = (url) => {
    dispatch(selectPokemon(url));
  }

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  return (
    <>
      <h1>Pokemon Component</h1>
      <div>
        {pokemonData.map((pokemon, idx) => {
          return (
            <Chip
              key={idx}
              label={pokemon.name}
              clickable
              onClick={() => handleSelect(pokemon.url)}
            />
          )
        })}
        <p>{JSON.stringify(selectedPokemon)}</p>
      </div>
    </>
  )
}
