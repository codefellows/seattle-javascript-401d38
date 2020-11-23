# Class 31

## Warm Up

Is a String a Palindrome?

```js

// LEAH
// two arrays
//  one half of the string goes in each array
//  compare the 2, with one going in reverse.
//     iterate through 1 array in reverse!
//  condition: word is uneven!! Need to handle with care


// Riva

// Also dividing in half.
// use the length to iterate from the front and the back
//    Dealing with the mid point
//    condition for if i / j equals some midpoint.


// What data structure will work the best for a solution.

// queue, stack, deque.

// stack will take a string 'kayak' -> ['k', 'a', 'y', 'a','k']
// while stack has things in it, pop a letter off the stack and compare.


function isPalindrome(str) {

 // create our stack
  let stack = [];

// add all of our characters to the stack in stacklike order.
  for (let char = 0; char < str.length; char++) {
    stack.push(str[char]);
  }

// go through the stack in stacklike order and compare to the original string.
  let currentIndex = 0;
  while (stack.length) {
    let letter = stack.pop();

    if(letter !== str[0]) return false
  }

  return true;
}
```

## React Review

- component state: current data values of whatever you set, on a component.
  - array
  - strings
  - objects
  - numbers
  - per component.
  - ideally these are values that the component needs to do it's job.
- component props: Variables used to pass data from one component to another.
  - Data is passed from `parent` to `child`.
  - a property has to be set on the child for props to be passed down

- Parent component passed data down like so:
  
```jsx

render() {
  return (
    <div>
      <h1>hello</h1>
      <Form dataForForm={{"votes": 0}}>
    </div>
  ) 
}

```

- how to access props in a child

```jsx

// they come in as parameters on the component
function Form({dataForForm}) {


}

class Form extends React.Component {

  constructor(props) {

  }

  render() {
    // this.props
  }

}

```

- Event Handling
  - clicks / submits / change
  - define a event handler
    - Either a method that lives on the componenet class
    - or a function that is defined within the function scope / imported / passed down as props.

```jsx

  // class based
  handleClick = (event) => {
    const id = event.target.id;
  }

  // just a function
  function handleClick = (event) => {
    const id = event.target.id;
  }


return (
  
  <div id="some-div" onClick={handleClick}>Click Me</div>

)

```

- Lifecycle Methods
  - Component goes through a series of events
    - Mounting
    - Rendering
    - Updating
  - componentDidMount()
  - Class based components in order to make sure that operations occur (if needed) at specific points in a comnponent lifeCycle.

## Hooks

- Before hooks, all important React functionality had to be triggered off of 'this'.
- For many developer teams find themselves at a loss when sometimes we have to use 'this' and sometimes not.
  - Functional components are more efficicient in the js engine, but class components are required for state, lifecycle methods.
  - Let's remove the confusion, and just have everyone ues functional components.
- Their called 'Hooks' because they allow a function component to 'hook' into the same API that was triggered when we use the 'this' keyword from a class component.

`this.setState({age: 0}) // this would trigger a re-render`

`useState() // now something like this will trigger a re-render`  

`componentWillMount() // amything in here will run before the component has mounted to the DOM`

`useEffect() // this funcition will run before any component lifecycle event.`

- You will run into both of these syntaxes out in the wild.

## Using State / Lifecycle with Hooks

- see typed demo.

## Component Libraries
