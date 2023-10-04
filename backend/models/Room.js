import mongoose from 'mongoose';

const { Schema } = mongoose;

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
});

const Room = mongoose.model('Room', roomSchema);

export default Room;
