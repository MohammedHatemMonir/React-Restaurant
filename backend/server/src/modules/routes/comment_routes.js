const express = require("express");
const router = express.Router();
const comment_controller = require("../controllers/comment_controller");
const { Router } = require("express");
const validateCommentsInput = require("../../middlewares/validator/validation.comments.js");

router
    .route("/mealcomment")
    .post(
        // validateCommentsInput,
        comment_controller.analyze);
router
    .route("/rescomment")
    .post(
        // validateCommentsInput,
        comment_controller.res_comment);
        
module.exports = router;