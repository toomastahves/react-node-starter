import mongoose from 'mongoose';

export const connectToDatabase = () => {
  const url = process.env.MONGOLAB_URI || 'mongodb://user:pass@ds037005.mongolab.com:37005/toomastahvesdb';
  try {
    mongoose.connect(url);
    console.log('Connected to MongoDB.');
  } catch(e) {
    console.log('Error connecting MongoDB.');
  }
};
