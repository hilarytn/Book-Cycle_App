import mongoose from 'mongoose';

const {Schema} = mongoose;



const chatroomSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },

    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
}, {timestamps: true});

const Chatroom = mongoose.model('Chatroom', chatroomSchema);

export default Chatroom;
