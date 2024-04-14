const search = require("../controllers/search.Contorller.js");
const express=require('express')

const SearchRouter=express.Router()

SearchRouter.post('/SearchUser',search.searchForUser)

module.exports=SearchRouter