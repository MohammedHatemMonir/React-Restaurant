const { body } = require("express-validator");
const validateCommentsInput=[
    body("text")
    .notEmpty()
    .withMessage("text Is Empty"),
    body("mealid")
    .notEmpty()
    .withMessage("text Is Empty"),

]

module.exports=validateCommentsInput