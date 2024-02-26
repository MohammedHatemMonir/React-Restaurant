const express = require("express");
const usersController = require("../controllers/usersController");
const { Router } = require("express");
const { validateUserInputSignUp,validateUserInputLogin} = require("../../middlewares/validator/validation.user.js");
const router = express.Router();
router
    .route("/")
 
    // sign up
    .post(
        validateUserInputSignUp,
        usersController.addNewuser
    )
router
    .route("/test")
    // log in
    .post(
        validateUserInputLogin,
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