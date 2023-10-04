import mongoose from 'mongoose';

const { Schema } = mongoose;

const messageSchema = new Schema({
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

export default Message;
