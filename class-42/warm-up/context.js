import Axios from "axios";
import React, { Context, useContext, useState } from "react";
// import List from "../List";

// this needs to be exported for other components
export const PokemonContext = React.createContext();

function List() {
  const context = useContext(PokemonContext);

  return (
    <>
      <h1>{context.pokemonData.map((each) => each.name)}</h1>
      <button onClick={context.getPoke}>Click Me</button>
    </>
  );
}

function APP() {
  const [pokemon, SetPokemon] = useState([]);

  async function getPoke() {
    try {
      const response = await Axios.get("https://pokeapi.co/api/v2/pokemon");
      SetPokemon(response.data.results);
    } catch (error) {
      console.error(error);
    }

    // .then(response =>{
    //   console.log(response.data);
    //   SetPokemon(response.data);
    //   return <h1>{pokemon}</h1>
    // })
    // .catch(error => console.log(error));
  }

  return (
    <PokemonContext.Provider value={{ pokemonData: pokemon, getPoke: getPoke }}>
      <List />
    </PokemonContext.Provider>
  );
}
export default APP;
