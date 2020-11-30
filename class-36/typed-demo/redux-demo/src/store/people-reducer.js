const initialState = [{ name: 'Jacob', role: 'instructor' }];

/**
 * Actions
 */

// Actions correlate directly to reducer logic
// return a type and a payload
// components will fire this action
export const updatePeople = (peopleArray) => {
  return {
    type: 'FETCH_PEOPLE',
    payload: peopleArray,
  }
}

export const addPeople = (person) => {
  return {
    type: 'ADD_PEOPLE',
    payload: person,
  }
}

/**
 * Reducer
 */

// Our reducer function that gives us our currect app state, and an action that we can use to update that state
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (action.type) {
    case 'FETCH_PEOPLE':
      return action.payload;
    case 'ADD_PEOPLE':
      return [...state, action.payload];
    default:
      return state;
  }
}

export default reducer;
