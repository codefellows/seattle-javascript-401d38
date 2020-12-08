# Warm Up - React Context

## Setup

Go to Code Sandbox and start a new React Project.

## Excercise

Create a React Context and a Context Provider component that can fetch pokemon from the Pokeapi and make them accessible to any child component that wants to subscribe to the context.

- Use `React.createContext` to export a context object that any component could subscribe to.
- Use the Provider to export a component that contains a state of `pokemonData` which will be an array of Pokemon
  - The Provider should make an HTTP request automatically.
- Create a `PokemonList` component that subscribes to the context and displays a list of pokemon.
- STRETCH_GOAL: Is you have time, create a function that lets the user display the next list of pokemon from the pokeapi.
