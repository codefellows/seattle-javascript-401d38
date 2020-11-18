import React from 'react';
import superagent from 'superagent';
import './App.css';

import If from './components/if.js';
import Modal from './components/modal.js';
import List from './components/list';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [],
      count: 0,
      headers: {},
      isLoading: false,
    }
  }

  // before anything is rendered to the page, make an api request
  async componentDidMount() {
    await this.setState({ isLoading: true });

    // let response = await fetch('https://pokeapi.co/api/v2/pokemon', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   }
    // });
    // let headers = await response.headers();
    // let json = await response.json();
    let response = await superagent.get('https://pokeapi.co/api/v2/pokemon');
    console.log(response.headers);
    await this.setState({
      isLoading: false,
      items: response.body.results,
      // item: json.results,
    });
  }

  render() {
    return (
      <div className="App">
        <If condition={this.state.isLoading}>
          <p>..loading</p>
        </If>
        <Modal>
          <p>Here is modal text</p>
        </Modal>
        <List>
          {this.state.items}
        </List>
      </div>
    );
  }
}

export default App;
