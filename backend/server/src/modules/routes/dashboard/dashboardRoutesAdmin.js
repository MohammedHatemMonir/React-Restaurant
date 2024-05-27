const dashboardControllerAdmin = require("../../dashboard/dashboardControllerAdmin.js");
const express=require('express')
const dashboardRouterAdmin=express.Router()

dashboardRouterAdmin.get('/dashboardControllerAdmin',dashboardControllerAdmin.allRestaurantOrders)

module.exports=dashboardRouterAdmin