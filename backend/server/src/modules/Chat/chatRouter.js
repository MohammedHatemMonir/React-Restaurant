const express=require('express')
const chatController=require('../Chat/chatControllers.js')
const ChatRouter=express.Router()

ChatRouter.post('/SendMessageAI',chatController.SendMessageAI)

module.exports=ChatRouter
