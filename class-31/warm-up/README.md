# Warm Up - Is a String a Palindrome

## Problem Domain

A palindrome is a word that is spelled the same forwards and backwards. A very common challenge for junior devs especially for JS developers, is to create a function that can return whether or not a string is a Palindrome.  But with the caveat that you are restricted from using any built in methods for any type.

- Come up with a solution to see if a string is a Palindrome but you may not any methods what-so-ever that you have not created yourself
- Here is a solution for the problem that implements several string and array methods to get our result

```javascript

function palindrome = (string) => {
   // Each step of this solution uses a method that is defined on the `String` or `Array` prototype.
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}
```

## Hints

- Try and reproduce the same series of operations as the code above but without the use of the built in methods.
- What data structures could you use to replicate the order of characters required for validation?
