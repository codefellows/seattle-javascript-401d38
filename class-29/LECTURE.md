# Class 29: Componenet Routing

## Review

- Quicksort
  - going through an algorithm for quicksort and implementing it and describing what is does.
  - Spencer
    - Pick a pivot point and split the array
      - the pivot is chosen
        - the end of the array
        - the beginning of the array
        - a random position
        - median (middle) position.
    - place the other values on the left and right of the pivot.
    - Sort each side recursively.

```js

// the function that calls our sorting function recursively
function quickSort(arr, left, right) { // left and right are index values
  if (left < right) {

    let position = partition(arr, left, right);

    quickSort(arr, left, position - 1); // will represent the left side of our 'sort-of' sorted array.
    quickSort(arr, postition + 1, right);
  }

}

// 2 goals, selecting a pivot and moving it, sorting the rest of the values in relation to the pivot


let test = [5,6,1];

function partition(arr, left, right) {

  // this selects the middle of the array.
  // let pivot = arr[right + Math.floor(left / 2)];

  // let i = left;
  // let j = right;

  // // Sara's method start from the middle and swapping elements from each side.
  // while (i <= j) {

  //   while (arr[i] < pivot) {
  //     }
  //   while(arr[j]) j--;
  // }

  let pivotValue = arr[right]; // 1

  let low = left - 1; // -1
  for (let i = left; i < right; i ++) {
    if (arr[i] < pivot) {
      low++; // 0
      swap(arr, i, low;) // 0 : 0
    }
  }

  swap(arr, right, low + 1);

  // after the swap, this should be the position that denotes the middle for our sub-array;
  return low + 1;
}

// swaps 2 index positions
function swap(arr, i, low) {

  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

```

- See warm up folder

## Scheduling

- There is a holiday next week: Thanksgiving!!!!
  - What this means is that canvas has been offset by 2 days ( Thursday and Friday ).
  - The week before final project week is very light on formal content.
    - we are preping for project week.
    - And we have white boarding.

## Componenet Composition Review

- Create an <If /> and implement some conditional rendering
- implement some other REST methods.
  - Where can we perform those METHODS?
    - Errors when making requests against our API-server
    - We can use our json-server / jsonplaceholder
    - potential cross-origin-request errors.
      - Installing `cors` from npm.
- Making forms populate with data from local
  - Linking <History> to our form component
    - Onclick we should be able to pass url and method to the <form /> component.
    - Setting state on the <Form /> from a sibling or child component.


## Componenet Routing

- If our url bar ends with `/home` vs `/about`
  - Render a home view or an about view with seperate components
- We'll be using  `react-router-dom`
  - BrowserRoter: a component that must all the routes
  - Route: a componet that gets rendered conditionally
    - What does our url end with?
  - Link: will facilate a transition from one view to another
    - Update our window.location
    - You can get this to work with an <a> tag but there couls be some side effects.
