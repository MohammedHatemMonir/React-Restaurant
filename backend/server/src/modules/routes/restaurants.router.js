const express=require('express')
const control = require("../controllers/restaurants.controller");

const router = express.Router();
router.get('/getAllrestaurants',control.getAllrestaurant)
router.post('/Addrestaurants',control.addNewrestaurant)
router.delete('/deleterestaurants/:id',control.deleterestaurant)
module.exports = router;