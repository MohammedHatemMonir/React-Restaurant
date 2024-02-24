const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const usersController = require("../controllers/usersController");
const { Router } = require("express");

router
    .route("/")
    .post(
        [
            body("text")
            .notEmpty()
            .withMessage("text Is Empty"),

        ],
        usersController.analyze);
    
module.exports = router;