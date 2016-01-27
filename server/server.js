import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import favicon from 'serve-favicon';
import webpack from './middleware/webpack';

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(favicon('public/favicon.ico'));
app.use(logger('dev'));

app.set('port', (process.env.PORT || 1337));
app.listen(app.get('port'), () => {
  console.log(`Server started on ${app.get('port')}`);
});

if(process.env.NODE_ENV !== 'production') {
  webpack(app);
}
