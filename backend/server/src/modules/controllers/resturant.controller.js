const restaurant = require("../../database/models/resturant.Model");
const { validationResult } = require("express-validator");
const meal = require("../../database/models/Meals_model");
const uploadImg = require('../../utils/uploadImg.js');
const rescomment = require("../../database/models/resComments_model");
const userModel = require("../../database/models/userModel.js");

const categoeryModel = require("../../database/models/Category.Model.js");
const mealComments = require('../../database/models/Comments_model.js');
const Time = require("../../utils/Date.js");


const getResturantWithMeals = async (req, res) => {
    try {
        const { id } = req.params;
        const meals = await meal.find({ ResID: id });

        let existingMeals;

        const mealPromises = meals.map(async (meal) => {
            const MealComments = await mealComments.find({ MealID: meal._id })

            return { ...meal._doc, MealComments };
        });

        await Promise.all(mealPromises)
            .then(results => {
                existingMeals = results.filter(result => result !== null);
            })
            .catch(err => {
                console.error(err);
            });


        const RestaurantData = await restaurant.findOne({ _id: id });

        const restaurantComments = await rescomment.find({ ResID: id }).populate('user', 'name userImg -_id').sort({ createdAt: -1 });;
        res.status(200).json({ restaurant: RestaurantData, meals: existingMeals, resComments: restaurantComments });
    } catch (error) {
        res.status(500).json({ message: "Error Retrieving Restaurants" }); //removed err for securrity reasons
    }
}


const getAllresturant = async (req, res) => {
    try {
        const restaurants = await restaurant.find({})
            .populate('categoryId', '_id category')
            .sort({ createdAt: -1 });

        console.log(restaurants);
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving restaurants", error: error.message });
        console.error('Error fetching restaurants:', error);
    }
}

//module.exports = { getAllresturant };



const addNewresturant = async (req, res) => { //{ResName, ResImg, Categoery,ResBanner,location, ownerId} Remove validation of .png,add banner to database ,Upload image from request body
        let ResImg;
        let ResBanner;
        let owner;
        let category;
    try {
        // let owner;
        // let category;
        // console.log("Get all res started, body:", req.body);
        if (req.session.user.role != "ADMIN")
            return res.status(400).json({ errors: "Not Authenticated" });


        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }

        //  const resImgUrl = await uploadImage(req.body.ResImg);
        //  const resBannerUrl = await uploadImage(req.body.ResBanner);
        const restaurantname = req.body.ResName;
        if(!restaurantname) return res.status(400).json({ message: "Restaurant name is required" });



        // const restaurants = await restaurant.countDocuments({ ResName: restaurantname });
        // Finding the restaurant by its name
        const restaurants = await restaurant.findOne({ ResName: restaurantname });

        if (restaurants) return res.status(409).json ({ message: "Restaurant is already exited"});

        if(!req.body.category) return res.status(403).json({success: false, message: "Category required"});

            // const rating = 0;
            // const comment_num = 0;
            // ResImg = await uploadImg(req.body.resImg);
            [ResImg, ResBanner, category, owner] = await Promise.all([
                uploadImg(req.body.resImg),
                uploadImg(req.body.resBanner),
                categoeryModel.findOne({_id: req.body.category}),
                userModel.findOne({_id: req.body.ownerId})
            ]);
            // try {
            //     ResBanner = await uploadImg(req.body.resBanner);
            //     category = await categoeryModel.findOne({ _id: req.body.category });
            //     owner = await userModel.findOne({ _id: req.body.ownerId });
            // } catch (err) {
            //     console.log("Error in uploading RESTAURANT img", err);
            // }
            if (!category) return res.status(404).json({ success: false, message: "Category not found"});
            if (!owner) return res.status(404).json({ success: false, message: "Owner not found"});

            // try {
                //const category = await addCategory(req.body.Categoery);
            const newRestaurantData = {
                ResName: req.body.ResName,
                ResImg: ResImg,
                ResBanner: ResBanner,
                categoryId: category._id,
                location: req.body.location,
                rating: 0,
                comment_num: 0,
                ownerId: owner._id
                //creation_date: createdAt
            };
            const ownerRole = owner.role === 'ADMIN' ? owner.role : 'owner';
            const newRestaurant = await restaurant.create(newRestaurantData);
            await userModel.updateOne(
                { _id: owner._id },
                {
                    $set: {
                        role: ownerRole,
                        resId: newRestaurant._id
                    }
                }
            );
                global.io.to(newRestaurant.ownerId.toString()).emit("new-notification", {message: "Your restaurant has been successfully added to the site", time:Time, link: "/tutorials" });
                global.io.to(req.session.user._id).emit("new-notification", {message: `The restaurant has been added`, time: Time, link: "/tutorials" });
                global.io.to("ADMIN").emit("new-notification", {message: `The admin ${req.session.user.name} has added it ${newRestaurant.ResName}`, time: Time, link: "/tutorials" });
                res.status(200).json(newRestaurantData);
            }
            catch (error) {
                console.log('Error creating new restaurant:', error);
                res.status(500).json({ error: 'Server error while adding new restaurant' });
                if (ResImg) {
                    await uploadImg.deleteImage(ResImg);
                }
                if (ResBanner) {
                    await uploadImg.deleteImage(ResBanner);
                }
                res.status(500).json({ message: "Could not add restaurant" });
            }
        }
        // catch (error) {
        // console.log("Error in addNewresturant", error);
        // if (ResImg) {
        //     await uploadImg.deleteImage(ResImg);
        // }
        // if (ResBanner) {
        //     await uploadImg.deleteImage(ResBanner);
        // }
        // res.status(500).json({ message: "Could not add restaurant" });
        // }
    // }
        // }
        //  else {
        //     res.send("Restaurant already exists");
        // }

    // }
// }


const deleteresturant = async (req, res) => {
    try {
        const { id } = req.params;
        if (req.session.user.role !== "ADMIN") {
            return res.status(403).json({ message: "Unauthorized" });
        }
        const restaurantToDelete = await restaurant.findOneAndDelete({ _id: id });
        const MealsToDelete = await meal.find({ ResID: id });
        await userModel.updateOne({ _id: restaurantToDelete.ownerId }, { $unset: { resId: 1 } });
        if (!restaurantToDelete) {
            return res.status(404).json({ message: "Restaurant Not Found" });
        }
        await rescomment.deleteMany({ ResID: id });

        try {
            if (restaurantToDelete.ResImg) {
                await uploadImg.deleteImage(restaurantToDelete.ResImg);
            }
            if (restaurantToDelete.ResBanner) {
                await uploadImg.deleteImage(restaurantToDelete.ResBanner);
            }
            if (MealsToDelete) {
                MealsToDelete.forEach(async (meal) => {
                    if (meal.MealImg) {
                        await uploadImg.deleteImage(meal.MealImg);
                    }
                });
            }
        } catch (error) {

            console.error('Error deleting image:', error);
        }

        await meal.deleteMany({ ResID: id });
        const ownerDeleted=await userModel.updateOne({_id:restaurantToDelete.ownerId},{
            $set: {
                role: 'user',
                resId: null
            }
        })
        console.log("Deleted meals", MealsToDelete,ownerDeleted);
        global.io.to("ADMIN").emit("new-notification", {message: `The admin ${req.session.user.name} has deleted the ${restaurantToDelete.ResName}`, time: Date.now().toString(), link: "/tutorials" });
        res.status(200).json({ message: "Restaurant Deleted Successfully" });
    } catch (error) {
        console.log("Error in deleteresturant", error)
        res.status(500).json({ message: "error" });
    }
};





const updateRestaurant = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.session?.user?._id;
        const checkOwner = await restaurant.findOne({ _id: id, ownerId: userId });
        console.log(checkOwner)
        if (!checkOwner && req.session.user.role !== "ADMIN") {
            return res.status(403).json({ error: "Unauthorized" });
        }


        const NewResData = {}

        if (req.body.ResName) {
            NewResData.ResName = req.body.ResName;
        }
        if (req.body.category) {
            NewResData.categoryId = req.body.category;
        }
        if (req.body.location) {
            NewResData.location = req.body.location;
        }
        if (req.body.ResImg) {
            NewResData.ResImg = await uploadImg(req.body.ResImg);
        }
        if (req.body.ResBanner) {
            NewResData.ResBanner = await uploadImg(req.body.ResImg);
        }




        const updatedRestaurant = await restaurant.findByIdAndUpdate(id, NewResData, { new: true });

        if (!updatedRestaurant) {
            return res.status(404).json({ error: "Failed to update restaurant" });
        }
        global.io.to(checkOwner.ownerId.toString()).emit("new-notification", {message: `Modified successfully`, time: Date.now().toString(), link: "/tutorials" });
        res.status(200).json(updatedRestaurant);
    } catch (error) {
        console.error("Error updating restaurant:", error);
        res.status(500).json({ error: "Server error while updating restaurant" });
    }
};

const addCategory = async (categoryName) => {


    let category = await categoeryModel.findOneAndUpdate({ category: categoryName }, { category: categoryName },
        { upsert: true, new: true });
    return category;
};
const getAllCategory = async (req, res) => {
    try {
        let category = await categoeryModel.find({});
        return res.json({ categories: category });
    } catch (error) {
        console.error('Error fetching categories:', error);
        return res.json({ Message: "Error" });
    }
};


const addRestaurantCategory = async (req, res) => { //{categoryName: ""}
    try {
        if (req.session.user.role != "ADMIN") { return res.json({ Message: "Not Authenticated!" }); }


        let category = await categoeryModel.findOneAndUpdate({ category: req.body.categoryName }, { category: req.body.categoryName },
            { upsert: true, new: true });
        console.log(category)
        return res.json({ category });
    } catch (error) {
        console.error('Error adding category', error);
        return res.json({ Message: "Error" });
    }

}

const Categoery = async (req, res) => {
    try {
        const { category } = req.query;
        let filter = {};
        if (category) {
            const categorytype = await categoeryModel.findOne({ Categoery: category });

            if (categorytype) {
                filter = { Categoery: categorytype._id };
            }
        }
        const restaurants = await restaurant.find(filter);
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

// const getress=async(req,res)=>{
//     let oneCategory = 'Arabic';

//     try {
//       const category = await categoeryModel.findOne({ category: oneCategory });
      
//       if (category) {
//         const restaurants = await restaurant.find({ categoryId: category._id }).sort({ rating: -1 }).limit(5);
//         console.log(restaurants);
//         res.json({restaurants:restaurants})
//       } else {
//         console.log('Category not found');
//       }
//     } catch (error) {
//       console.log('Error finding category or restaurants:', error);
//     }
// }

module.exports = {
    getAllresturant,
    addNewresturant,
    deleteresturant,
    getResturantWithMeals,
    updateRestaurant,
    addCategory,
    Categoery,
    getAllCategory,
    addRestaurantCategory,
    // getress
};
