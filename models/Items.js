const  mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
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
    }
} ,  { timestamps : true });

const Items =  mongoose.model('Items' , ItemSchema);

module.exports = Items