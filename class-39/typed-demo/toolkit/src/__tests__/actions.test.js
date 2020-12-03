import thunk from 'redux-thunk';
import configMockStore from 'redux-mock-store';
import { fetchPokemon } from '../store/pokemonSlice.js';

const mockStore = configMockStore([thunk]);

describe('testing actions', () => {
  it('should create a pokemon/SET action', () => {
    const store = mockStore({ results: [] });

    return store.dispatch(fetchPokemon()).then(() => {
      let actions = store.getActions();
      expect(actions[0].type).toEqual('pokemon/SET');
    });
  });
});
