const express=require('express')
const control = require("../controllers/resturant.controller");

const router = express.Router();
router.get('/getAllresturant',control.getAllresturant)
router.post('/Addresturant',control.addNewresturant)
router.delete('/deleteresturant/:id',control.deleteresturant)
module.exports = router;