const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const orderSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        role: 'user',
        required: true
    },
    items: [{
        name: {
            type: String,
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
    }],
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'cancelled'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;