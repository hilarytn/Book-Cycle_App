import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    otherName: String,
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    telephone: String,
    gender: String,
    dateOfBirth:  {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
         city: String,
         country: String,
         address: String
        },
    
    profilePicUrl: String/* {
        type: mongoose.Schema.Types.String
    } */
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;