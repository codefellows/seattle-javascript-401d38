import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Counter from './components/counter.js';
import Form from './components/form.js';

/**
 * class App extends React.Component {
 *  
 *   constructor() {
 *     super();
 *     this.state =  { // this is whatever data your component needs
 *        age: 0;
 *     }
 *   }
 * }
 */


function App() {

  // returns a getter and a setter
  let [age, setAge] = useState(0); // returns a getter and a setter

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* we can use the useState function to set variable a trigger react functionality*/}
        <Counter age={age} setAge={setAge} />
      </header>
      <Form />
    </div>
  );
}

export default App;
