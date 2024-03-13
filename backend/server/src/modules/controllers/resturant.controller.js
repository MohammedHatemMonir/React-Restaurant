const restaurant = require("../../database/models/resturant.Model");
const { validationResult, check } = require("express-validator");
const meal = require("../../database/models/Meals_model");

const getResturantWithMeals = async (req, res) => {
    try {
        const{id}=req.params;
        const meals = await meal.find({ResID:id});
        const RestaurantData = await restaurant.findOne({_id:id});
        
        res.status(200).json({restaurant: RestaurantData,meals:meals});
    } catch (error) {
        res.status(500).json({ message: error });
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

const addNewresturant = async (req, res) => { //{ResName, ResImg, Categoery}
    try {
        if(req.session.user.role == "user")
            return res.status(400).json({ errors: "Not Authenticated" });

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const allowedMimetypes = ['jpeg', 'png', 'jpg'];
        const fileExtension = req.body.ResImg.split('.').pop().toLowerCase();
        if (!allowedMimetypes.includes(fileExtension)) {
            return res.status(400).json({ error: 'Invalid image format' });
        } else {
            const restaurantname = req.body.ResName;
            const restaurants = await restaurant.find({ ResName: restaurantname });
            if (!restaurants[0]) {
                    const rating=0
                    const Meals_num=0
                    const comment_num=0
                    const newRestaurantData = {
                        ResName: req.body.ResName,
                        ResImg: req.body.ResImg,
                        Categoery: req.body.Categoery,
                        rating:rating,
                        comment_num:comment_num,
                        // Not From FrontEnd
                        creation_date: Date.now
                    };
                    const newRestaurant = await restaurant.create(newRestaurantData);
                    res.status(200).json(newRestaurantData);

            } else {
                res.send("Restaurant already exists");
            }
        }
    } catch (error) {
        console.log("Error in addNewresturant", error);
        res.status(500).json({ message: "Could not add restaurant" });
    }
}

const deleteresturant = async (req, res) => {
    try {
        const { id } = req.params;
        const restaurants = await restaurant.findByIdAndDelete(id);
        if (!restaurants) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const postRestaurantComment = async (req, res) => {

    try{
        res.status(200).json({ message: "ADDED COMMENT!" });
        console.log("Added comment!", `resID: ${req.body.resID} + Comment: ${req.body.comment}`);


    }catch(e){
        console.log("Failed to post comment",e);
    }
}





//Mustafa shehata add order

module.exports = {
    getAllresturant,
    addNewresturant,
    deleteresturant,
    postRestaurantComment,
    getResturantWithMeals
};
