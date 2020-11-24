import { useEffect } from 'react';
import './App.css';

import ClassForm from './components/formClass.js'
import HookForm from './components/formHooks.js'
import CustomForm from './components/customForm.js'
import MessageForm from './components/messageForm.js'

function App() {

  // do something once before we render
  useEffect(() => {
    // maybe make a HTTP request here
  });

  return (
    <div className="App">
      {/* <ClassForm />
      <HookForm />
      <CustomForm /> */}
      <MessageForm />
    </div>
  );
}

export default App;
