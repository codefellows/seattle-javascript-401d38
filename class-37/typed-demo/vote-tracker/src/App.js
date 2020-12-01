import './App.css';

import Status from './components/status.js'
import VoteCounter from './components/vote-counter.js';

function App() {
  return (
    <div className="App">
      <Status />
      <VoteCounter />
    </div>
  );
}

export default App;
