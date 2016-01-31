import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import favicon from 'serve-favicon';
import webpack from './webpack/devServer';

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(favicon('public/favicon.ico'));
app.use(logger('dev'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express started at ${port}`);
});

if(process.env.NODE_ENV !== 'production') {
  webpack();
}
