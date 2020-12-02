import superagent from 'superagent';

let apiUrl = 'https://pokeapi.co/api/v2/pokemon';

// any async action needs to return a function with dispatch as a parameter
export const getRemoteData = (url = apiUrl) => (dispatch) => {
  console.log('hitting pokemon api');
  return superagent.get(url)
    .then(response => {
      dispatch(getAction(response.body)) // an action is dispatches here
    });
}

// our normal action that returns a type and a payload
export const getAction = payload => {
  return {
    type: 'FETCH_POKEMON',
    payload: payload,
  }
}

// async actions that affect the selectedPokemon state property instead of the pokedex
export const getOne = (url) => (dispatch) => {
  return superagent.get(url)
    .then(response => {
      dispatch(selectAction(response.body)) // an action is dispatches here
    });
}

export const selectAction = payload => ({
  type: 'SELECTED_POKEMON',
  payload: payload,
})
