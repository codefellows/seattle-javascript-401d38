import { useState, useEffect } from 'react';
// the react-bootstrap library docs will tell you how to import these things.
import Button from 'react-bootstrap/Button';

function Counter({ age, setAge }) {

  let [count, setCount] = useState(0);

  // any function you supply to use effect will run before the component mounts and renders
  useEffect(() => {
    console.log('this function runs everytime something is updated');
  }) // provide an array of values that you want a re-render to occur after they update
  // If you supply and empty array, this funcito just runs once begore a render (componentDidMount)

  useEffect(() => {
    setAge(10);
    console.log('this only runs once, right after the component mounts');
  }, []);

  // this is known as a side effect => changing something from some values into another value
  useEffect(() => {
    console.log('age is updated');
  }, [count]) // put a value that react should care about, and when it changes this function will execute.

  return (
    <>
      <Button onClick={() => setAge(age += 1)} variant="primary">Here is our age: {age}</Button>
      {/* <p onClick={() => setAge(age += 1)}>Here is our age: {age}</p> */}
      <Button onClick={() => setCount(count += 2)} variant="secondary">Here is our count: {count}</Button>
      {/* <p onClick={() => setCount(count += 2)}>Here is our count: {count}</p> */}
    </>
  )
}

export default Counter;
