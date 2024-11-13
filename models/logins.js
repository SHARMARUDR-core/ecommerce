const mongoose = require('mongoose')

const userLoginSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true,
    } , 
    password : {
        type : String , 
        required : true 
    }
} ,  { timestamps : true });

const Logins =  mongoose.model('Logins' , userLoginSchema);

module.exports = Logins
