import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  profilePictureUrl: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  address: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
  }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
