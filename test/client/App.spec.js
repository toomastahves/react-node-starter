import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import App from 'client/App';

describe('App test', () => {
  it('renders App', () => {
    const app = TestUtils.renderIntoDocument(<App />);
    const appNode = ReactDOM.findDOMNode(app);
    expect(ReactDOM.findDOMNode(appNode).textContent).to.equal('hello world');
  });
});
