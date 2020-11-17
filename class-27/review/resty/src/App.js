import React from 'react';
import './App.css';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <Form /> {/* new Form() */}
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
