const express=require('express')
const chatController=require('../Chat/chatControllers.js')
const ChatRouter=express.Router()

ChatRouter.get('/chat',chatController.gett)

module.exports=ChatRouter
