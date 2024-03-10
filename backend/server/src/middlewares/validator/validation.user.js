const { body } = require("express-validator");
const validateUserInputSignUp=[
    body("name")
    .notEmpty().withMessage("Title Is Empty")
    .isLength({ min: 3 }).withMessage("Length must be more than 3 digits"),
    body("password")
    .notEmpty().withMessage("Enter the password")
    .isLength({ min: 3 }).withMessage("week password"),
    body("email")
    .notEmpty().withMessage("Enter your Email")
    .isEmail().withMessage("Please enter a valid email address"),
]

const validateUserInputLogin = [
    body("nameOrEmail")
    .notEmpty().withMessage("Enter your Email")
    .isLength({ min: 3 }).withMessage("Length must be more than 3 digits"),
    body("password")
    .notEmpty().withMessage("Enter the password")
    .isLength({ min: 3 }).withMessage("week password"),
];


module.exports={validateUserInputSignUp,validateUserInputLogin}