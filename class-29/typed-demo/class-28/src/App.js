import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Form from './components/form.js';
import Results from './components/results.js';
import History from './components/history.js';
import Navigation from './components/nav.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      historyItems: [],
      method: '',
      url: '',
      body: '',
      response: {},
    }
  }

  handleResponse = (res) => {
    // let's set the last response so that our results can be displayed, 
    // we can also add the last set of parameters from the form after is was submitted
    this.setState({
      response: res,
      historyItems: [...this.state.historyItems, { method: this.state.method, url: this.state.url, body: this.state.body }],
    });
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleMethod = (e) => {
    let method = e.target.value;
    this.setState({ method });
  }

  handleHistory = (options) => {
    console.log(options);
    this.setState({
      url: options.url ? options.url : '',
      method: options.method ? options.method : '',
      body: options.body ? options.body : '',
    });
  }

  render() {
    return (
      // This component must wrap all of our routes in order to make the switch
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Form
                handleResponse={this.handleResponse}
                handleMethod={this.handleMethod}
                handleChange={this.handleChange}
                method={this.state.method}
                url={this.state.url}
                body={this.state.body} />
            </Route>
            <Route path="/results">
              <Results response={this.state.response} />
            </Route>
            <Route path="/history">
              <History handleHistory={this.handleHistory} items={this.state.historyItems} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
