import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connectMongo = await mongoose.connect(
            "mongodb+srv://bookcycle:bookcycleXXXX@book-cycle.naza1nv.mongodb.net/?retryWrites=true&w=majority",
             {dbName: 'bookcycle'});
        console.log(`MongoDB connected: ${connectMongo.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error!', error);
        process.exit(1);
    }
}

export default connectDB;