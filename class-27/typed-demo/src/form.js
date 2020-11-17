import React from 'react';

function Form(props) {

  // const handleChange

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const url = e.target.url.value;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    props.handleList(data.results);
  }

  return (
    <form data-testid="form" onSubmit={handleForm}>
      <input data-testid="input" name="url" type='text' />
    </form>
  );
}

export default Form;
