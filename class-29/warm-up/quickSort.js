'use strict';

// the function that calls our sorting function recursively
function quickSort(arr, left, right) { // left and right are index values
  if (left < right) {

    let position = partition(arr, left, right);

    quickSort(arr, left, position - 1); // will represent the left side of our 'sort-of' sorted array.
    quickSort(arr, position + 1, right);
  }
}

// 2 goals, selecting a pivot and moving it, sorting the rest of the values in relation to the pivot
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
  for (let i = left; i < right; i++) {
    if (arr[i] <= pivotValue) {
      low++; // 0
      swap(arr, i, low) // 0 : 0
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

let test = [-120, 29, 50, 3, 48, 12, 10];
quickSort(test, 0, test.length - 1);
console.log(test);
