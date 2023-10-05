import mongoose from 'mongoose';

const { Schema } = mongoose;

const messageSchema = new Schema({

    chatUsers: {
        type: Array,
        required: true
     },
     content: {
        type: String,
        required: true,
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    }, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

export default Message;