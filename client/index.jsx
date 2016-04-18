import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { Provider } from 'react-redux';
import Routes from './routes/';
import store from './store/';
import 'material-design-lite/material.min.css';
import 'material-design-lite/material.min.js';
import './style.css';

const application = (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(application, document.getElementById('root'));
