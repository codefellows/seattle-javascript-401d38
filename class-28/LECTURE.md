# Class 28

## Warm Up

- Fizz Buzz component
  - function that counts from 0 to some number (parameter)
    - for every number divisible by 3 => fizz
    - for every number divisible by 5 => buzz
    - If divisible by both => fizzbuzz
    - print the number if none are.


```jsx
import React from 'react';


function fizzbuzz(number) {

  let arrayOfElements = [];

  for (let i = 1; i <= number; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

      // console.log('fizzbuzz');
      arrayOfElements.push(<p>{'Fizzbuzz'}<p>);


    } else if(i % 3 === 0) {

      // console.log('fizz');
      arrayOfElements.push(<p>{'fizz'}</p>)

    } else if(i % 5 === 0) {

      // console.log('buzz');
      arrayOfElements.push(<p>{'buzz'}</p>)

    } else {

      // console.log(i);
      arrayOfElements.push(<p>{i}</p>);

    }
  }

  return arrayOfElements;
}

```

## Lab Review

- Riva: Confusing instructions
- See review folder

## Component Componenet

- Building that take in `props`, update `state`, return some markup or `jsx`.
- Because of the functional nature of components we can do so much more
  - Add conditional logic that toggles classnames
  - We can decide to render 2 different.
  - If a conditional doesn't pass don't render anything at all.
  - We can create a component that just handle the layout.

- DEMO:
  - <if> : take a prop that is boolean, if true render the children, if not render nothing
    - `props.children` all the elements that would be rendered in between the open and closing Component tags
  - <modal> : if a state variable is toggles, switch from rendering a button to render som children.
