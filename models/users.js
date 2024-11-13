// models/user.js
const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    } , 
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String,
    }
} , { timestamps : true });

// Create and export the User model
const Users =  mongoose.model('Users', userSchema);
module.exports = Users;
