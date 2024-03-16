const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const orderMealSchema = Schema({
    // FrontEnd
    mealId: { type: Schema.Types.ObjectId, ref: "Meal", required: true },
    mealName: { type: String, ref: "Meal", required: true },
    quantity: { type: Number, default: 1 },
    // FrontEnd
    // Backend
    // price: { type: Number },
});

exports.OrderMeal = mongoose.model("OrderMeal", orderMealSchema);