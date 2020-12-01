// our Reducer function

// lets start by defining how our store will first appear
let initialState = {
  totalVotes: 0,
}

function VotesReducer(state = initialState, action) {

  const { type } = action;

  switch (type) {
    case 'INCREMENT':
      return { ...state, totalVotes: state.totalVotes + 1 };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export default VotesReducer;
