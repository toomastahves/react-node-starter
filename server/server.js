import webpack from './webpack/devServer';
import app from './express/app';

import { connectToDatabase } from './database/mongodb';
connectToDatabase();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express started at ${port}`);
});

if(process.env.NODE_ENV !== 'production') {
  webpack();
}
