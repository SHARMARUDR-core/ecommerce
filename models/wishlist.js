const mongoose = require('mongoose')

const wishlistSchema = new mongoose.Schema({
    user :{
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'user' ,
        required : true ,
        unique : true
    } , 
    wishlistItems : {
        type : [{}] ,
        required : true
    }
}  , { timestamps : true } )

const Wishlists = mongoose.model( 'Wishlists'  , wishlistSchema)

module.exports = Wishlists