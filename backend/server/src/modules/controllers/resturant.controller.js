const restaurant = require("../../database/models/resturant.Model");
const { validationResult } = require("express-validator");
const meal = require("../../database/models/Meals_model");
const uploadImg = require('../../utils/uploadImg.js');
const rescomment = require("../../database/models/resComments_model");
const userModel = require("../../database/models/userModel.js");

const getResturantWithMeals = async (req, res) => {
    try {
        const { id } = req.params;
        const meals = await meal.find({ ResID: id });
        const RestaurantData = await restaurant.findOne({ _id: id });

        const restaurantComments = await rescomment.find({ ResID: id }).populate('user','name userImg -_id');
        res.status(200).json({ restaurant: RestaurantData, meals: meals,resComments: restaurantComments });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}
const getRestaurantWithComments = async (req, res) => {
    try {
        const { id } = req.params;
        const restaurantComments = await rescomment.find({ ResID: id }).populate('user');
        //const userComments = await rescomment.find({ user: id });

        if (!restaurantComments) {
            return res.status(404).json({ message: "Restaurant comments not found" });
        }

        res.status(200).json({ restaurantComments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}



const getAllresturant = async (req, res) => {
    try {
        const restaurants = await restaurant.find({});
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const addNewresturant = async (req, res) => { //{ResName, ResImg, Categoery,ResBanner} Remove validation of .png,add banner to database ,Upload image from request body
    try {
        console.log("add new res body:", req.body)
        if (req.session.user.role != "ADMIN")
            return res.status(400).json({ errors: "Not Authenticated" });

        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }

        //  const resImgUrl = await uploadImage(req.body.ResImg);
        //  const resBannerUrl = await uploadImage(req.body.ResBanner);

        const restaurantname = req.body.ResName;
        const restaurants = await restaurant.find({ ResName: restaurantname });
        if (!restaurants[0]) {
            const rating = 0;
            const Meals_num = 0;
            const comment_num = 0;
            let ResImg
            let ResBanner;
            if(req.body.resImg)
                ResImg = await uploadImg(req.body.resImg);
            if(req.body.resBanner)
                ResBanner= await uploadImg(req.body.resBanner);
            try {
                    const newRestaurantData = {
                        ResName: req.body.ResName,
                        ResImg: ResImg, 
                        ResBanner: ResBanner, 
                        Categoery: req.body.Categoery,
                        rating: rating,
                        comment_num: comment_num,
                        creation_date: Date.now()
                    };
                    const newRestaurant = await restaurant.create(newRestaurantData);
                    res.status(200).json(newRestaurantData);
                } catch (error) {
                    console.error('Error creating new restaurant:', error);
                    res.status(500).json({ error: 'Server error while adding new restaurant' });
                }

        } else {
            res.send("Restaurant already exists");
        }

    } catch (error) {
        console.log("Error in addNewresturant", error);
        res.status(500).json({ message: "Could not add restaurant" });
    }
}

const deleteresturant = async (req, res) => {
    try {
        const { id } = req.params;
        const meals= await meal.deleteMany({ ResID:id });
        const comments= await rescomment.deleteMany({ ResID:id });
        const resturants=await restaurant.findOneAndDelete({_id: id});



        
        if (!resturants) {
            return res.status(404).json({ message: "Restaurant Not Found" });
        }
        res.status(200).json({ message: "Restaurant Deleted Successfully",resturants,meals});
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const postRestaurantComment = async (req, res) => {
    try {
        res.status(200).json({ message: "ADDED COMMENT!" });
        console.log("Added comment!", `resID: ${req.body.resID} + Comment: ${req.body.comment}`);
    } catch (e) {
        console.log("Failed to post comment", e);
    }
}

module.exports = {
    getAllresturant,
    addNewresturant,
    deleteresturant,
    postRestaurantComment,
    getResturantWithMeals,
    getRestaurantWithComments
};