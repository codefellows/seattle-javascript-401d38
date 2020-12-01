// export all the functions that I might want my components to execute.

// each of these object will eventaully get passed into the reducer if we assign them correctly to our `connect` function in a component
export function increment(candidate) {
  return {
    type: 'INCREMENT',
    payload: candidate
  }
}

export function reset() {
  return {
    type: 'RESET',
  }
}
