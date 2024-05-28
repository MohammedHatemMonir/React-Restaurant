const dashboardControllerAdmin = require("../../dashboard/dashboardControllerAdmin.js");
const express=require('express')
const dashboardRouterAdmin=express.Router()

dashboardRouterAdmin.get('/allRestaurantOrders',dashboardControllerAdmin.allRestaurantOrders)
dashboardRouterAdmin.get('/getPositiveComments',dashboardControllerAdmin.getPositiveComments)
dashboardRouterAdmin.get('/getNegativeComments',dashboardControllerAdmin.getNegativeComments)
dashboardRouterAdmin.get('/getNeutralComments',dashboardControllerAdmin.getNeutralComments)
dashboardRouterAdmin.get('/getAllOwner',dashboardControllerAdmin.getAllOwner)
module.exports=dashboardRouterAdmin