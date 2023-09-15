import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    otherName: String,
    lastName: String,
    userName: String,
    password: String,
    telephone: String,
    gender: String,
    dateOfBirth: String,
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