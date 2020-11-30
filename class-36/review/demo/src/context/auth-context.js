import React, { useState } from 'react';

// export this so that other components can use it to subscribe to the auth context
export const AuthContext = React.createContext();

// this is the main export that goes into our parent app
function AuthProvider(props) {

  const [loggedIn, toggleLogIn] = useState(false);
  const [user, setUser] = useState({});


  async function login(username, password) {

    const data = { username, password }

    try {

      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });

      const token = await response.text();
      console.log(token);
      toggleLogIn(true);

    } catch (e) {
      console.log(e);
    }
  }

  function logout() {
    setUser({});
    toggleLogIn(false);
  }

  // our provider needs to initialize its context state with the 'value' prop
  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, user }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
