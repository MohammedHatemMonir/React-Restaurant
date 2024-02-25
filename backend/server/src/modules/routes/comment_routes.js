const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const comment_controller = require("../controllers/comment_controller");
const { Router } = require("express");

router
    .route("/")
    .post(
        [
            body("text")
            .notEmpty()
            .withMessage("text Is Empty"),
            body("meal")
            .notEmpty()
            .withMessage("text Is Empty"),

        ],
        comment_controller.analyze);
    
module.exports = router;