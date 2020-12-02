import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getRemoteData, getOne } from '../store/actions.js';

function PokemonList(props) {

  const { pokemonData, selectedPokemon, getRemoteData, getOne } = props;

  useEffect(() => {
    getRemoteData();
  }, []);

  return (
    <>
      <h2>List of Pokemon</h2>
      <ul>
        {pokemonData.results.map((pokemon, idx) => {
          return <li key={idx} onClick={() => getOne(pokemon.url)}>{pokemon.name}</li>
        })}
      </ul>
      <div>
        {JSON.stringify(selectedPokemon)}
      </div>
    </>
  )

}

const mapStateToProps = (state) => ({
  pokemonData: state.pokedex,
  selectedPokemon: state.selectedPokemon,
});

const mapDispatchToProps = {
  getRemoteData,
  getOne,
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
