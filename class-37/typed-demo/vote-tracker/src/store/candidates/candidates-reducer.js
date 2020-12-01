let initialState = [
  { name: 'Mary', votes: 0 },
  { name: 'Bob', votes: 0 },
  { name: 'Jamie', votes: 0 }
];

function CandidatesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      return state.map(candidate => {
        if (candidate.name === payload.name) {
          return { name: candidate.name, votes: candidate.votes + 1 };
        }

        return candidate;
      });

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export default CandidatesReducer;
