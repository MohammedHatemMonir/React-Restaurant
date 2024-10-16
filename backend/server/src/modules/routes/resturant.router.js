const express=require('express')
const control = require("../controllers/resturant.controller");
const validateResturantInput = require('../../middlewares/validator/validation.resturant.js');
//const Uploadimage = require('../../utils/UploadImage/upload.js');
const router = express.Router();
//router.post("/", Uploadimage.single("image")) 

router.get('/getAllresturant',control.getAllresturant)
router.post('/Addresturant',validateResturantInput,control.addNewresturant)
router.delete('/deleteresturant/:id',control.deleteresturant)
router.get('/getResturantWithMeals/:id',control.getResturantWithMeals)
router.put('/updateRestaurant/:id',control.updateRestaurant)
//router.get('/getResturantWithcomments/:id',control.getRestaurantWithComments)
//getResturantWithcomments
router.post('/addCategory',control.addRestaurantCategory)
router.get('/category/:category',validateResturantInput,control.Categoery)
router.get('/getAllCategory',validateResturantInput,control.getAllCategory)
//router.get('/test',validateResturantInput,control.getress)
module.exports = router;