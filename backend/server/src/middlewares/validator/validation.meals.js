const { body } = require("express-validator");
const validateMealsInput=[
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
]

module.exports=validateMealsInput