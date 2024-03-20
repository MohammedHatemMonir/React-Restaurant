const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const orderMealSchema = Schema({
    id: { type: Schema.Types.ObjectId, ref: "Meal", required: true },
    // name: { type: String, required: true },
    quantity: { type: Number, default: 1 },
});

exports.OrderMeals = mongoose.model("OrderMeals", orderMealSchema);