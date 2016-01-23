import express from 'express';

const app = express();
app.use(express.static('public'));

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));
