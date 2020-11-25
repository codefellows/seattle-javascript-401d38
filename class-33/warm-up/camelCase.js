'use strict';


function camelCase(string) {


  // check if our input is a string
  if (typeof string !== 'string') {
    return 0;
  }


  // intialize a count
  let count = 0;
  let wordStarted = false; // boolean for validating when word counting needs to happen

  // iterate / traverse the input string
  for (let i = 0; i < string.length; i++) {

    // conditionals start here
    //  is the character lowercase
    //  is the character uppercase
    //  is the character white space
    let prevChar = string[i - 1];
    let currChar = string[i];
    let nextChar = string[i + 1];
    // what is the character before && what is the character  

    if (nextChar) {
      if (currChar === currChar.toLowerCase() && nextChar === nextChar.toUpperCase()) {
        // if our count is 0 we want to increment by to account for the first word that we traversed
        // if count is not zero we can assume that we already counted the first word properly and can increment like normal
        count ? count++ : count += 2;
      }
    }
  }

  return count;
}






const test1 = camelCase(12376834);

test1 === 0 ? console.log('test1 passed') : console.log('test1 failed');

const test2 = camelCase('oiajwefkjasduifhalejfnoauihsdaklsjfoiajseoriHfoiasdjfhisadfaisfgauyfgausyf');

console.log(test2);
test2 === 2 ? console.log('test2 passed') : console.log('test2 failed');

const test3 = camelCase('NotACamelCaseWord') // 0

test3 === 0 ? console.log('test3 passed') : console.log('test3 failed');
