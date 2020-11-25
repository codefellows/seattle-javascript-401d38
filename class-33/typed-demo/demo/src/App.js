
import './App.css';

import ThemeProvider from './context/theme.js'
import SiteProvider from './context/site.js'

import Form from './components/form.js';
import List from './components/list.js';

function App() {
  return (
    <SiteProvider>
      <ThemeProvider>
        <div className="App">
          <Form />
          <List />
        </div>
      </ThemeProvider>
    </SiteProvider>
  );
}

export default App;
