import React from 'react';

class People extends React.Component {

  render() {

    let list = this.props.list || [];

    return (
      <>
        <ul data-testid="output">
          {list.map(person => <li key={person.name}>{person.name}</li>)}
        </ul>
      </>
    );
  }
}

export default People;
