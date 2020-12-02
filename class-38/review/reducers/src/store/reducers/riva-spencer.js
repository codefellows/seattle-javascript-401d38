// Reducer function with initial state of {}

const ADD_PRODUCT = 'ADD_PRODUCT';
const UPDATE_ALL_PRODUCTS = 'UPDATE_ALL_PRODUCTS';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

const initialState = { 0: { name: 'test', quantity: 2 } }; // creates a variable for initial state
const RivaSpencerReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, [action.payload.key]: action.payload.value }
    case UPDATE_ALL_PRODUCTS:
      return action.payload;
    case DELETE_PRODUCT:
      let tempState = { ...state };
      delete tempState[action.payload];
      return tempState;
    default:
      return state;
  }
}

export default RivaSpencerReducer;
