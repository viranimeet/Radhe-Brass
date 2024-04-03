// import mongoose from 'mongoose';
// import config from 'config';
// require('dotenv').config();

// const db = config.get('mongoURI');

// const connectDB = async () => {
//   try {
//     mongoose.set('strictQuery', true);
//     await mongoose.connect(db);
//     console.log('MongoDB connected...');
//   } catch (err) {
//     console.error('Failed to connect to MongoDB:', err);
//     process.exit(1);
//   }
// };


// export { connectDB };



import mongoose from 'mongoose';
require('dotenv').config();

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  }
};

export { connectDB };
