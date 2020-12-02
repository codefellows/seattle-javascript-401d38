import reducer from '../store/list-reducer.js';

describe('test the list reducer', () => {
  it('should Perform a FETCH_POKEMON', () => {

    let initialState = {};

    let action = {
      type: 'FETCH_POKEMON',
      payload: { name: 'Jacob' }
    }

    expect(reducer(initialState, action)).toEqual({ name: 'Jacob' });
  });
});
