import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import favicon from 'serve-favicon';
import responseTime from 'response-time';
import compression from 'compression';
import helmet from 'helmet';
import errorhandler from 'errorhandler';

const app = express();

app.use(logger('dev'));
app.use(responseTime());
app.use(compression());
app.use(helmet());
app.use(helmet.hidePoweredBy({ setTo: 'Fantasy Unicorns' }));

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(favicon('public/favicon.ico'));

if(process.env.NODE_ENV !== 'production') {
  app.use(helmet.frameguard('allow-from', 'http://localhost:3000'));
  app.use(errorhandler());
}

export default app;
