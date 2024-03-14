const express = require("express");
const usersController = require("../controllers/usersController");
const { Router } = require("express");
const { validateUserInputSignUp,validateUserInputLogin} = require("../../middlewares/validator/validation.user.js");
const router = express.Router();

router.post("/signup",validateUserInputSignUp,usersController.signup)
router.post("/signin",validateUserInputLogin,usersController.signin)
router.post("/terminateSession",validateUserInputLogin,usersController.terminateSession)
router.post("/google",validateUserInputLogin,usersController.terminateSession)

router.post("/logout",validateUserInputLogin,usersController.logout)
router.post("/session",validateUserInputLogin,usersController.session)
router.post("/terminateSession",validateUserInputLogin,usersController.terminateSession)

    // sign up
    // .post(
    //     validateUserInputSignUp,
    //     usersController.signup
    // )

    // log in
    // .post(
    //     validateUserInputLogin,
    //     usersController.signin);

// router
//     .route("/:username/:password/:role/:Email")


    // {
    //     "username": "N2",
    //     "password": "ADMIN2",
    //     "role": "ADMI2N",
    //     "Email": "SGEG4GR4G"
    //   }

module.exports = router;