const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const usersController = require("../Controller/usersController");
const { Router } = require("express");

router
    .route("/")
 
    // sign up
    .post(
        [
            body("username")
            .notEmpty()
            .withMessage("Title Is Empty")
            .isLength({ min: 3 })
            .withMessage("Length must be more than 3 digits"),
            body("password").notEmpty().withMessage("Enter the password")
            .isLength({ min: 3 })
            .withMessage("week password"),
            body("Email").notEmpty().withMessage("Enter your Email"),

        ],
        usersController.addNewuser
    )
router
    .route("/test")
    // log in
    .post(
        [
            body("Email")
            .notEmpty()
            .withMessage("Title Is Empty")
            .isLength({ min: 3 })
            .withMessage("Length must be more than 3 digits"),
            body("password").notEmpty().withMessage("Enter the password")
            .isLength({ min: 3 })
            .withMessage("week password"),

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