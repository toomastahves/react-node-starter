'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const main = () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<App />, div);
}
main();
