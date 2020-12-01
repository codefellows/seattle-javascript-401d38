# Class 37: Complex Reducers

## Warm Up

- Find the `n` value from the Fibonacci Sequence.
- How can we calculate the value?
- How can we find the certain position in the number?

```js

// Rizo:
// Test cases:
//    validate for a positive integer (N)

// Specify the first 2 number of the sequence to get us started.

// Darius
// start a sum of values / store number in an array

let sequence = [0,1];

// Kevin
//   starting from position 0 (of the sequence or our values) and iterate up to n
//    move x, y, z variables ( purpose of the e) calculate the fibonacci sequence value of a number that approaches n

for (let i = 2; i <= N; i++) {
  // calculation
  // if (sequence[i] === undefined) {

  // }
  sequence[i] = sequence[i - 1] + sequence[i - 2];
}

// Spencar
//   return the last value calculated
return sequence[N];

```

## Review

- Material UI
- Importing Images in React
- Actions
- Reducers
- Store
  - the contents of something our app cares about.
    - messages / users / todos
  - There is a state associated with it which will change
  - How we update our stores state?
    - Two things that redux uses to manage state:
      - Reducer
      - Actions

## Complex Reducers

- See Demo folder and diagrams

## Testing our Redux Store

- Mocking a redux store for testing
