const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId , ref: 'user', required: true },
    items: [
        {
            items: { 
                type: mongoose.Schema.Types.ObjectId ,
                ref: 'Items',
                required: true
            },
            quantity: { 
                type: Number,
                required: true
            },
            price: { 
                type: Number,
                required: true
            }
        }
    ],
    totalAmount: { 
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending',
    },
    paymentMethod: {
        type: String,
        enum: ['Credit Card', 'Debit Card', 'UPI', 'Cash on Delivery'],
        required: true,
    }
} , { timestamps : true });

const Orders = mongoose.model('Orders', orderSchema);

module.exports = Orders