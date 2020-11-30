import { useContext } from 'react';
import { AuthContext } from '../context/auth-context.js';

function AuthForm() {

  const context = useContext(AuthContext);


  function handleSubmit(e) {
    e.preventDefault();
    context.login(e.target.username.value, e.target.password.value);
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" type="text" />
      <input name="password" type="text" />
      <button type='submit'>Log In</button>
    </form>
  )
}

export default AuthForm;
