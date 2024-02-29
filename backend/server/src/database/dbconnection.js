const mongoose = require("mongoose");

// Define the connection function

const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mahmoud:graduationproject@graduationproject.depfjap.mongodb.net/graduationproject", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Optionally, you can add more options here
        });
        console.log("MongoDB Server Connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

// Export the connection function
module.exports = {
    connectToMongoDB,
};