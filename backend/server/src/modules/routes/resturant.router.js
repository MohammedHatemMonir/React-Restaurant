const express=require('express')
const control = require("../controllers/resturant.controller");
const validateResturantInput = require('../../middlewares/validator/validation.resturant.js');

const router = express.Router();
router.get('/getAllresturant',control.getAllresturant)
router.post('/Addresturant',validateResturantInput,control.addNewresturant)
router.delete('/deleteresturant/:id',control.deleteresturant)
router.get('/getResturantWithMeals/:id',control.getResturantWithMeals)
router.post('/postRestaurantComment',validateResturantInput,control.postRestaurantComment)

module.exports = router;