import mongoose from 'mongoose';

const { Schema } = mongoose;

const bookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    description: String,
    condition: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    availabilityStatus: String,
    coverArtUrl: String
}, {timestamps: true});

const Book = mongoose.model('Book', bookSchema);

export default Book;