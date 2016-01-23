// Support for more ES6 features in Node.
require('babel-core/register');

if(process.env.NODE_ENV === 'production') {
  require('./server.prod.js');
} else {
  require('./server.dev.js');
}
