let initialState = {
  results: [],
  count: 0,
  next: null,
  previous: null,
}

const listReducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case 'FETCH_POKEMON':
      return payload;
    default:
      return state;
  }
}

export default listReducer;
