// Support for more ES6 features in Node.
require('babel-core/register');
if(process.env.NODE_ENV === 'development') {
  require('./server.dev.js');
}
if(process.env.NODE_ENV === 'production') {
  require('./server.prod.js');
}
