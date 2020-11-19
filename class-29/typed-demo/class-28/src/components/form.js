import { Link } from 'react-router-dom';

function Form({ handleResponse, handleMethod, handleChange, method, url, body }) {

  async function handleForm(e) {
    e.preventDefault();

    let options = { method };
    if (body) options.body = body;

    console.log(url, options);
    let response = await fetch(url, options);
    let json = await response.json();

    handleResponse({
      count: body.length,
      results: json,
    });
  }

  return (
    <form onSubmit={handleForm} >
      <input onChange={handleChange} name="url" type="text" value={url} />
      <button onClick={handleMethod} value="GET">GET</button>
      <button onClick={handleMethod} value="POST">POST</button>
      <button onClick={handleMethod} value="PUT">PUT</button>
      <button onClick={handleMethod} value="DELETE">DELETE</button>
      <textarea onChange={handleChange} name="body" value={body} />
      <Link to="/results">
        <button type="submit">Submit</button>
      </Link>
    </form >
  )

}

export default Form;
