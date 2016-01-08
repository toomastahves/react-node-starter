import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  static displayName = 'HelloApp';
  render() {
    return (
      <div>
        {'hello world'}
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
