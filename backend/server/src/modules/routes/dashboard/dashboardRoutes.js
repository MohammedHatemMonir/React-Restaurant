const typeComments = require("../../dashboard/dashboardController.js");

const express=require('express')

const routerTypeComments=express.Router()

routerTypeComments.get('/postiveComments/:id',typeComments.getPositiveComments)
routerTypeComments.get('/negativeComments/:id',typeComments.getNegativeComments)
routerTypeComments.get('/neutralComments/:id',typeComments.getNeutralComments)
routerTypeComments.get('/userComments/:id',typeComments.getUserWriteComments)

module.exports=routerTypeComments
