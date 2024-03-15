const express = require("express");
const Order = require("../controllers/meals_controllers.js");
const router = express.Router();


// router handler to createOrder
router.post("/createOrder", Order.createOrder);

module.exports = router;



