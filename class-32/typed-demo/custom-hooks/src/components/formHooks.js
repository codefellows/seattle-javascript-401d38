import { useState } from 'react';

function Form() {

  // setValues will be able to trigger the React API
  const [values, setvalues] = useState({});

  // Our handle change function that looks at our event from our component
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setvalues({ ...values, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="assigned" onChange={handleChange} placeholder="assigned to" />
      <input name="task" onChange={handleChange} placeholder="task name" />
      <button type="submit">Submit</button>
      <p>{JSON.stringify(values)}</p>
    </form>
  )
}

export default Form;
