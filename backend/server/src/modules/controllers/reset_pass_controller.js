//const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../../database/models/userModel.js");
const {Vonage} = require('@vonage/server-sdk');

// Vonage credentials
const vonage = new Vonage({
  apiKey: "90fec4b7",
  apiSecret: "H1hxweVN3IWKJmdi"
});

// Function to generate a random reset code
const generateResetCode = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let resetCode = '';
  for (let i = 0; i < 6; i++) {
    resetCode += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return resetCode;
};

// Endpoint to request password reset
const requestReset = async (req, res) => {
  const { email, phoneNumber } = req.body;
  const existUser = await User.findOne({ email, phoneNumber });

  if (!existUser) return res.json({ success: false, message: "User not found" });

  const resetCode = generateResetCode();
  const resetCodeExpire = new Date(Date.now() + 5 * 60000); // 5 minutes expiry

  existUser.resetCode = resetCode;
  existUser.resetCodeExp = resetCodeExpire;
  await existUser.save();

  try {
    const from = 'Vonage APIs';
    const to = `20${phoneNumber}`;
    const text = `${existUser.name} Your password reset code is ${resetCode}`;

    await vonage.sms.send({ to, from, text });

    res.json({ success: true, message: "Verification code sent" });
  } catch (error) {
    console.error("Error sending SMS:", error);
    res.status(500).json({ success: false, message: "Failed to send verification code" });
  }
};

// Endpoint to reset password using SMS verification code
const resetPassSms = async (req, res) => {
  const { email, phoneNumber, resetCode } = req.body;
  const existUser = await User.findOne({ email, phoneNumber, resetCode });

  if (!existUser) return res.json({ success: false, message: "Invalid email, phone number, or reset code" });
  if (existUser.resetCodeExp < new Date()) return res.json({ success: false, message: "Reset code has expired" });

  try {
    const {newPassword}=req.body
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    existUser.password = hashedPassword;
    existUser.resetCode = null;
    existUser.resetCodeExp = null;
    await existUser.save();

    res.json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ success: false, message: "Failed to reset password" });
  }
};

module.exports = { requestReset, resetPassSms };
