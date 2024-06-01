const twilio = require("twilio");
const user = require("../../database/models/userModel.js");
const bcrypt = require("bcrypt");


const accountSid = 'AC2e5a89b5ab8e270be70405d568738d2d';
const authToken = '9398eaefc0a567607c4a93b8b48cf1b5';
const client = twilio(accountSid, authToken);

const generateResetCode = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let resetCode = '';
  for (let i = 0; i < 6; i++) {
    resetCode += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return resetCode;
};


const requestReset = async (req, res) => {
  const {email, phoneNumber} = req.body;
  const existUser = await user.findOne({email, phoneNumber});
  if (!existUser) return res.status(404).json({success: false, message: "User NOt found"});
  const resetCode = generateResetCode();
  const resetCodeExpire = new Date(Date.now() + 5 * 60000);
  existUser.resetCode = resetCode;
  existUser.resetCodeExp = resetCodeExpire;
  await existUser.save();

  await client.messages.create({
    body: `Your password reset code is ${resetCode}`,
    from: '+15513823830',
    to: phoneNumber
  });
  // .then(message => console.log("Message was sent",message)).catch(err => console.log("Message Not sent",err));

  res.json({success: true, message: "Verification sent code"});

}

const resetPassSms = async(req, res) => {
  const {email, phoneNumber, resetCode, newPass} = req.body;
  const existUser = await user.findOne({email, phoneNumber, resetCode});
  if(!existUser) return res.status(404).json({success: false, message: "Invalid email or phone Number or resetCode"});
  if(existUser.resetCodeExp < new Date()) return res.status(400).json({success: false, message: "Reset Code has expired"});

  const hashPassword = await bcrypt.hash(newPass,10);

  existUser.password = hashPassword;

  existUser.resetCode = null;

  existUser.resetCodeExp = null;

  await existUser.save();
  res.json({success: true, message: "Password succeeded successfully"});
}


module.exports = {requestReset, resetPassSms};