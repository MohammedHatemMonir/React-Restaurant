const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const orderSchema = Schema({
    resId: { type: Schema.Types.ObjectId, ref: "restaurant", required: true },
    // orderMeals: [{ type: Schema.Types.ObjectId, ref: "orderMeal", required: true }],
    meals: [
        {
            // type: Schema.Types.ObjectId, ref: "orderMeal", required: true,
            id: {type: Schema.Types.ObjectId, ref: "Meal", required: true},
            // // type: Schema.Types.ObjectId, ref: "Meal", required: true,
            quantity: { type: Number, default: 1 },
        },
    ],
    totalPrice: {
        type: Number,
    },
    user: { type: Schema.Types.ObjectId, role: "user", ref: "User" },
    status: {
        type: String,
        enum: ["pending", "confirmed", "completed", "cancelled"],
        default: "pending",
    },
    // BackEnd
    dateOrdered: {
        type: Date,
        default: Date.now,
    },
});


// orderSchema.virtual('id').get(function() {
//     return this._id.toHexString();
// });

// orderSchema.set('toJSON', {
//     virtuals: true,
// });

// module.exports = mongoose.model('Order', orderSchema);
exports.Order = mongoose.model('Order', orderSchema);





/**
Order Exmaple

{
    "res": "65e05800797715071921c5bd",
    "orderMeals": [
        {
            "quantity": 3,
            "meal": "65e05824797715071921c5c1"
        },
        {
            "quantity": 4,
            "meal": ""
        }
    ],
    "shippingAddress1": "Elgolf street, 1122",
    "shippingAddress2": "1-B",
    "city": "Cairo",
    "country": "Egypt",
    "phone": "0111223455",
    "user": "65e09b0cbf4f629f27b853dd"
}



{
    "res": "65e05800797715071921c5bd",
    "orderMeals": [
        {
            "quantity": 3,
            "meal": "65e05824797715071921c5c1"
        },
        {
            "quantity": 4,
            "meal": ""
        }
    ],
    "user": "65e09b0cbf4f629f27b853dd"
}


{
    "ResId": "65e05800797715071921c5bd",
    "meals": [
        {
            "id": "65e05824797715071921c5c1",
            "name": "test meal 2",
            "quantity": 4
        },
        {
            "id": "65e0582a797715071921c5c5",
            "name": "test meal",
            "quantity": 4
        },
        {
            "id": "65f1ea360f7998a12c6cb429",
            "name": "test meal 4",
            "quantity": 3
        }
    ]
}


*/