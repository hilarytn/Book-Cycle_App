import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
  condition: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  availabilityStatus: String,
  coverArtUrl: {
    type: String,
  },
}, { timestamps: true });

bookSchema.plugin(mongoosePaginate);
const Book = mongoose.model('Book', bookSchema);

export default Book;
