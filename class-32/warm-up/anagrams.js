/**
 * Are 2 words Anagrams
 */

// Sara 2 methods
//  - Check is character account is he the same
//  - sort in alphbetical order
//  - compare each array against one another.

//  - Iterate through the first word, checking if eacch letter exists and splice it out.
// stop / pots
// ['s', 't', 'o', 'p] => ['p' 'o' 't' 's'] is there an s?
// ['s''t'] => ['p', 'o', 't'] is there a t?
// space complexity O(1) if we don't have to create an array of characters.
// time complexity O(n)
//  - If you nest the loops our time grows to O(n^2), 

// ['s', 't', 'o', 'p] <=> ['t', 'o', 'p', 's];
// iterate through first string, create our dictionary
// potentially need something to turn our string into characters
// {s: 1, t: 1, o: 1, p: 1}
// iterate through the second string and see if we can lookup the letter and check if value is truthy
// t => [t: 1]
// if found decrement, if not found return false;

function anagram(string1, string2) {

  // create a dictionary of letters, key of letter, value is their fequency;
  const dict = {};
  let chars1 = string1.replace(/ /g, '').toLowerCase();
  let chars2 = string2.replace(/ /g, '').toLowerCase();

  if (chars1.length !== chars2.length) return false;

  // iterate once to create my Map of letter
  for (let i = 0; i < chars1.length; i++) {
    dict[chars1[i]] = dict[chars1[i]] + 1 || 1;
  }

  // iterate through the secong string and if our values is present in the dictionary
  for (let j = 0; j < chars2.length; j++) {
    if (!dict[chars2[j]]) return false;

    // remember to decrement as we find character values.
    dict[chars2[j]] -= 1;
  }

  return true;
}

console.log(anagram('dormitory', 'dirty room'));
