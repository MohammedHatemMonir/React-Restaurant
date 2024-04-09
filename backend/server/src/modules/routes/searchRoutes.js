const search = require("../controllers/search.Contorller.js");
const express=require('express')

const SearchRouter=express.Router()

SearchRouter.get('/SearchUser',search.searchForUser)

module.exports=SearchRouter