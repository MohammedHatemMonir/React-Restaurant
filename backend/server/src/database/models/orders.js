const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = Schema({
    // BackEnd - Session
    userId: { type: Schema.Types.ObjectId, role: "user", ref: "User" },
    // FrontEnd
    resId: { type: Schema.Types.ObjectId, ref: "restaurant", required: true },
    meals: [{
            // FrontEnd
            mealId: { type: Schema.Types.ObjectId, ref: "Meal", required: true },
            // FrontEnd
            quantity: { type: Number, default: 1 },
            // Backend
            price: { type: Number },
        }
    ],
    // Total price of different Meals or items
    // BackEnd
    totalPrice: {
        type: Number,
    },
    // BackEnd
    status: {
        type: String,
        enum: ["pending", "confirmed", "completed", "cancelled"],
        default: "pending",
    },
    // BackEnd
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Order', orderSchema);
