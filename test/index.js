// For loading CSS modules
import 'css-modules-require-hook';

// For creating in-memory HTML document
import { jsdom } from 'jsdom';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
global.window.location.href = 'http://localhost:1337/';
