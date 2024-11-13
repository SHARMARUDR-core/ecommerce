 const mongoose = require('mongoose')

const posterSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true 
    } , 
    company : {
        type : String , 
        required :true
    } ,
    subCategory : {
        type : String , 
        required : true
    } , 
    description: {
        type : String , 
        required :true
    } , 
    price: { 
        type: Number,
        required: true 
    } ,
    stock: { 
        type: Number,
        required: true
    } ,
    offer : {
        type : String 
    } ,
    url : {
        type : String , 
        required : true
    } , 
    category : {
        type : String , 
        required : true
    } , 
    companyLogo : {
        type : String , 
        required : true
    }
} ,  { timestamps : true });

const Posters =  mongoose.model('Posters' , posterSchema);

module.exports = Posters