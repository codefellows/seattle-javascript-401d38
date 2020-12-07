import React from "react";

function Card(props) {
  console.log(props.children);
  return (
    <div style={{ width: '500px', display: 'flex', flexDirection: 'column' }}>
      <h1 dataTestId={"Card"}>{props.title}</h1>
      <p>{props.subtitle}</p>
      <img style={{ width: '100%' }} src={props.url} alt={props.url}></img>
      <div>{props.children}</div>
    </div>
  );
}

export default Card;
