const express = require("express");
const { body } = require("express-validator");

const usersController = require("../Controller/usersController");
const { Router } = require("express");
const router = express.Router();
router
    .route("/")
 
    // sign up
    .post(
        [
            body("username")
            .notEmpty().withMessage("Title Is Empty")
            .isLength({ min: 3 }).withMessage("Length must be more than 3 digits"),
            body("password")
            .notEmpty().withMessage("Enter the password")
            .isLength({ min: 3 }).withMessage("week password"),
            body("Email")
            .notEmpty().withMessage("Enter your Email")
            .isEmail().withMessage("Please enter a valid email address"),

        ],
        usersController.addNewuser
    )
router
    .route("/test")
    // log in
    .post(
        [
            body("Email")
            .isEmail().withMessage("Please enter a valid email address")
            .notEmpty().withMessage("Enter your Email")
            .isLength({ min: 3 }).withMessage("Length must be more than 3 digits"),
            body("password")
            .notEmpty().withMessage("Enter the password")
            .isLength({ min: 3 }).withMessage("week password"),

        ],
        usersController.getSingleuser);

// router
//     .route("/:username/:password/:role/:Email")


    // {
    //     "username": "N2",
    //     "password": "ADMIN2",
    //     "role": "ADMI2N",
    //     "Email": "SGEG4GR4G"
    //   }

module.exports = router;