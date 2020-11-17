import React from 'react';

class Form extends React.Component {

  constructor() {
    super();
    this.state = {
      url: '',
      method: '',
    }
  }

  componentDidUpdate() {
    console.log('componenet is updated');
  }

  // in order to update state in a meaningful way, we must use this.setState
  handleClick = async (event) => {
    const method = event.target.value;
    await this.setState({ method });
    // this.state = { url: this.state.url, method: method };
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {

    // do things that need be done on render

    return (
      <form onSubmit={this.handleSubmit}>
        <p>Method: {this.state.method}</p>
        <input type="text" />
        <button onClick={this.handleClick} value="GET">GET</button>
        <button onClick={this.handleClick} value="POST">POST</button>
        <button onClick={this.handleClick} value="PUT">PUT</button>
        <button onClick={this.handleClick} value="DELETE">DELETE</button>
      </form>
    )
  }
}

export default Form;
