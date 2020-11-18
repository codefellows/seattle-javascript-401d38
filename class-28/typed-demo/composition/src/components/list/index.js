import React from 'react';
import './list.scss';

function List({ children }) {

  return (
    <ul className="list">
      {children.map(item => <li className="listItem" key={item.name}>{item.name}</li>)}
    </ul>
  )

}

export default List;
