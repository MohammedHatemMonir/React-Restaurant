const { body } = require("express-validator");
const validateCommentsInput=[
    body("text")
    .notEmpty()
    .withMessage("text Is Empty"),
    body("meal")
    .notEmpty()
    .withMessage("text Is Empty"),

]

module.exports=validateCommentsInput