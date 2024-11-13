const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: { 
        type: String ,
        required: true 
    } ,
    subCategory : {
        type : String , 
        required:true
    } ,
    list : [{}]
} , { timestamps : true });

module.exports = mongoose.model('Categorys', categorySchema);
