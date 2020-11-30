import { useContext } from 'react';
import { AuthContext } from '../context/auth-context.js';

function Auth(props) {

  const context = useContext(AuthContext);

  return context.loggedIn ? props.children : null;
}

export default Auth;
