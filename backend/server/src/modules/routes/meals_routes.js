const express=require('express')
const control = require("../controllers/meals_controllers");
const router = express.Router();
const validateMealsInput = require('../../middlewares/validator/validation.meals.js');
router.get('/getAllmeals',control.getAllmeals)
router.get('/GetMealComments/:id',control.GetMealsWithComments)
router.post('/Addmeal',validateMealsInput,control.addNewmeal);
router.put('/updatemeal/:id',control.updateMeal);
router.delete('/deleteMeal/:id',control.deleteMeal);
router.post('/createOrder', control.createOrder);
router.get('/getOrder', control.getMyOrders);
router.get('/getOrderDetails/:orderId', control.getOrderDetails);
// router.delete('/deletemeal/:id',control.deleteresturant)
module.exports = router;