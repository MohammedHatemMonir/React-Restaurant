const resetPassController = require("../controllers/reset_pass_controller.js");
const express = require("express");
const resetRouter = express.Router();

resetRouter.post("/reset-password", resetPassController.requestReset)
resetRouter.post("/reset-password-sms", resetPassController.resetPassSms);


module.exports = resetRouter;