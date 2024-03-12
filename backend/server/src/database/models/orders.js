const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const orderSchema = Schema({
    // BackEnd - Session
    user: {
        type: Schema.Types.ObjectId,
        role: 'user',
        required: true
    },
    // FrontEnd
    ResId: {type: String, ref: 'restaurant'},
    items: [{
        // FrontEnd
        id: {
            type: Schema.Types.ObjectId,
            required: true
        },
        // FrontEnd
        quantity: {
            type: Number,
            required: true
        },
        // Backend
        price: {
            type: Number,
            required: true
        }
    }],
    // Total price of different Meals or items
    // BackEnd
    totalPrice: {
        type: Number,
        required: true
    },
    // BackEnd
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'cancelled'],
        default: 'pending'
    },
    // BackEnd
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;