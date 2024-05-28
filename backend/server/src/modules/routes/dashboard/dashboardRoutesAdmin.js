const dashboardControllerAdmin = require("../../dashboard/dashboardControllerAdmin.js");
const express=require('express')
const dashboardRouterAdmin=express.Router()

dashboardRouterAdmin.get('/allRestaurantOrders',dashboardControllerAdmin.allRestaurantOrders)
dashboardRouterAdmin.get('/getPositiveComments',dashboardControllerAdmin.getPositiveComments)
dashboardRouterAdmin.get('/getNegativeComments',dashboardControllerAdmin.getNegativeComments)
dashboardRouterAdmin.get('/getNeutralComments',dashboardControllerAdmin.getNeutralComments)
dashboardRouterAdmin.get('/getAllOwner',dashboardControllerAdmin.getAllOwner)
dashboardRouterAdmin.get('/getLastTenDaysOrders',dashboardControllerAdmin.getLastTenDaysOrders)

module.exports=dashboardRouterAdmin