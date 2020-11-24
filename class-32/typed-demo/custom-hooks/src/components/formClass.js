import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {}, // this will hold key value pairs from form inputs
    }
  }


  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ values: { ...this.state.values, [name]: value } });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.assigned, event.target.task);
    console.log(this.state);
  }

  render() {
    // returns our markup / JSX
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="assigned" onChange={this.handleChange} placeholder="assigned to" />
        <input name="task" onChange={this.handleChange} placeholder="task name" />
        <button type="submit">Submit</button>
        <button>+</button>
        <button>-</button>
      </form>
    )
  }
}

export default Form;
