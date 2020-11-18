import React from 'react';

function Form({ handleState }) {


  async function handleSubmit(e) {
    e.preventDefault();

    let url = e.target.url.value;
    let method = e.target.method.value;


    let response = await fetch(url);
    let json = await response.json();

    console.log(json);

    handleState({ count: json.count, results: json.results });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="url" type="text" placeholder="url" />
      <input name="method" type="text" placeholder="method" />
      <button type="submit">Submit me!</button>
    </form>
  )

};

export default Form;
