import mongoose from 'mongoose';
<<<<<<< HEAD

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'bookcycle'
        });
        console.log(`MongoDB connected: ${conn.connection.host}`.green.underline);
=======
import dotenv from 'dotenv';

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        const connectMongo = await mongoose.connect(
            MONGO_URI,
             {dbName: 'bookcycle'});
        console.log(`MongoDB connected: ${connectMongo.connection.host}`);
>>>>>>> main
    } catch (error) {
        console.error('MongoDB connection error!', error);
        process.exit(1);
    }
}

export default connectDB;