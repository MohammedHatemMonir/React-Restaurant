const express=require('express')
const control = require("../controllers/meals_controllers");
const router = express.Router();
const { body } = require("express-validator");
router.get('/getAllmeals',control.getAllmeals)

router.post('/Addmeal',        
[
    body("MealName")
    .notEmpty().withMessage("Title Is Empty")
    .isLength({ min: 3 }).withMessage("Length must be more than 3 digits"),
    body("MealImg")
    .notEmpty().withMessage("IMG Is Empty"),
    body("Description")
    .notEmpty().withMessage("Enter THE Description"),
    body("Price")
    .isNumeric().withMessage("only numpers allowd")
    .notEmpty().withMessage("Enter THE Price"),
    body("Res")
    .notEmpty().withMessage("Enter RESTURANT NAME")
],control.addNewmeal)
// router.delete('/deletemeal/:id',control.deleteresturant)
module.exports = router;