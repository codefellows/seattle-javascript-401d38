// a new syntax using import
// const React = require('react');
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header.jsx';
import Footer from './footer.jsx';

import './app.scss';

// react classes are picky
class App extends React.Component {

  constructor() {
    // call super here in order for state to be 'react' state
    super();
    // state lives here on this.state
    this.state = {
      sum: 0,
    };

    // make sure you are binding our methods to the React.Compnent this, not the functions contextual this
    this.increment = this.increment.bind(this);
  }



  handleClick = (e) => {
    console.log(e.target);
    if (e.target.name === 'decrement') {
      this.setState({ sum: this.state.sum - 1 });
    } else {
      this.setState({ sum: this.state.sum + 1 });
    }
  }

  increment() {
    // we need to use this method in order to hook into the React lifecycle
    this.setState({ sum: this.state.sum + 1 });
    // this.state = a + b;
  }

  // we can work around the binding of this with a fat arrow function
  decrement = () => {
    this.setState({ sum: this.state.sum - 1 });
  }

  // almost all react components will need this method ( if you have a component that doesn't show any content you don't need this)
  render() {

    // returns JSX (html written in js)
    return (

      // A JSX fragment ( formless container for child elements )
      <div className="main">
        {/* // we define a prop called sum on the header component */}
        <Header sum={this.state.sum} />
        <p>Here is some paragraph content {this.state.sum} </p>
        <button name="increment" onClick={this.handleClick}>increase sum</button>
        <button name="decrement" onClick={this.handleClick}>decrease sum</button>
        <Footer />
      </div>
    );
  }
}

// attach our React App to our 
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
