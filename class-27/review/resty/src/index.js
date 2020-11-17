import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Kevin: connecting our App component to the actual rendered DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
