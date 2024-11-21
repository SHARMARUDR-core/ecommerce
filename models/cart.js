const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId ,
        ref: 'user',
        required: true,
        unique: true
    },
    products: [
        {
            Item : { 
                type: mongoose.Schema.Types.ObjectId ,
                ref: 'item',
                required: true
            },
            quantity: { 
                type: Number,
                required: true
            }
        }
    ]
} , { timestamps : true });
const Carts = mongoose.model('Carts', cartSchema);
module.exports = Carts
