import './App.css';

import AuthContext from './context/auth-context.js';
import AuthForm from './components/auth-form.js';
import Auth from './components/auth.js';

function App() {
  return (
    <div className="App">
      <AuthContext>

        <AuthForm />

        <Auth>
          <h1>This will only Display if logged in!</h1>
        </Auth>

      </AuthContext>
    </div>
  );
}

export default App;
