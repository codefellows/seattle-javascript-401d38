import React from 'react';

import People from './people.js';
import Form from './form.js';


// Displays some text
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      list: [], // this array is 
    }
  }

  // this function updates our state for the people component
  handleList = (payload) => {
    this.setState({ list: payload });
  }

  render() {
    return (
      <>
        <h1 data-testid="display-text">Hello from App</h1>
        <People list={this.state.list} />
        <Form handleList={this.handleList} />
      </>
    )
  }
}

export default App;
