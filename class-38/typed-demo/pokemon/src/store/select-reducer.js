let initialState = {};

const selectReducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {
    case 'SELECTED_POKEMON':
      return payload;
    default:
      return state;
  }
}

export default selectReducer;
