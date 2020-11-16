import React from 'react';

function Header(props) {
  return (
    <header>
      <h1>Welcome to the header</h1>
      <p>Sum from parent: {props.sum}</p>
    </header>
  );
}

export default Header;
