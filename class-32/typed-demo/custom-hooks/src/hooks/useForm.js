import { useState } from 'react';

// Custom hooks are still functions
// takes in a callback for when a submit event needs to happen
function useForm(callback) {

  // this is required to make our function calls update React (re-render, pass down props, etc...)
  const [values, setValues] = useState({});

  // same handler as before, but now we use a callback that fires on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    callback(values);
  }

  // is pretty much the same as before
  // handle all change events on input
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setValues({ ...values, [name]: value });
  }

  // returning our getters for values, and 2 setters for updating values and executing our callback
  return [
    handleSubmit,
    handleChange,
    values,
  ]
}

export default useForm;
