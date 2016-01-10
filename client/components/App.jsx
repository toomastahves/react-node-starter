import React, { Component, PropTypes } from 'react';
import style from './app.style.css';
import styleable from 'react-styleable';

class App extends Component {
  static displayName = 'App';
  static propTypes = {
    css: PropTypes.object
  };
  render() {
    return (
      <div className={this.props.css.hello}>{'hello world'}</div>
    );
  }
}

export default styleable(style)(App);
