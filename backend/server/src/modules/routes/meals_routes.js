const express=require('express')
const control = require("../controllers/meals_controllers");
const router = express.Router();
const validateMealsInput = require('../../middlewares/validator/validation.meals.js');
router.get('/getAllmeals',control.getAllmeals)

router.post('/Addmeal',validateMealsInput,control.addNewmeal);
router.post('/createOrder', control.createOrder);
// router.delete('/deletemeal/:id',control.deleteresturant)
module.exports = router;