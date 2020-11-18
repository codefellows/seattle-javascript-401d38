// import React from 'react';
import ReactDOM from 'react-dom';

function Fizzbuzz({ number }) {

  let arrayOfElements = [];

  for (let i = 1; i <= number; i++) {

    if (i % 3 === 0 && i % 5 === 0) {

      // console.log('fizzbuzz');
      arrayOfElements.push(<p>{'Fizzbuzz'}</p>);


    } else if (i % 3 === 0) {

      // console.log('fizz');
      arrayOfElements.push(<p>{'fizz'}</p>)

    } else if (i % 5 === 0) {

      // console.log('buzz');
      arrayOfElements.push(<p>{'buzz'}</p>)

    } else {

      // console.log(i);
      arrayOfElements.push(<p>{i}</p>);

    }
  }
  return arrayOfElements;
}

const root = document.getElementById('root');
ReactDOM.render(<Fizzbuzz number={20} />, root);
