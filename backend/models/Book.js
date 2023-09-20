import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  availabilityStatus: String,
  coverArtUrl: {
    type: String,
    required: true,
  },
}, { timestamps: true });

bookSchema.plugin(mongoosePaginate);
const Book = mongoose.model('Book', bookSchema);

export default Book;
