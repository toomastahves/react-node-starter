import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import { expect } from 'chai';
import jsdom from 'jsdom-global';
import 'css-modules-require-hook';

import App from '../client/App';

describe('App test', () => {
  jsdom();
  it('renders App', () => {
    const app = TestUtils.renderIntoDocument(<App />);
    const appNode = ReactDOM.findDOMNode(app);
    expect(ReactDOM.findDOMNode(appNode).textContent).to.equal('hello world');
  });
});
