// import logo from './logo.svg';
import './App.css';

import Card from './components/RizoMichael.js';

function App() {
  return (
    <div className="App">
      <Card
        title="My Awesome Title"
        subtitle="look at this image"
        url='https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
      >
        My awesome description, with lots of words
        <p>Another paragraph</p>
      </Card>
    </div>
  );
}

export default App;
