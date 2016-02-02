import mongoose from 'mongoose';

export const connectToDatabase = () => {
  const url = process.env.MONGOLAB_URI || '';
  try {
    mongoose.connect(url);
    console.log('Connected to MongoDB.');
  } catch(e) {
    console.log('Error connecting MongoDB. Check connection string.');
  }
};
