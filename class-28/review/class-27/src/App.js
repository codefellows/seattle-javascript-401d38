import React from 'react';
import './App.css';

import Form from './components/form.js';
import Results from './components/results.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0,
      results: [],
    }

    this.handleState = this.handleState.bind(this);
  }

  handleState(newState) {

    let { count, results } = newState;

    this.setState({
      count: count ? count : this.state.count,
      results: results ? results : this.state.results,
    });
  }

  render() {
    return (
      <div className="App">
        <Form handleState={this.handleState} />
        <Results count={this.state.count} results={this.state.results} />
      </div>
    );
  }
}

export default App;
