const mongoose = require("mongoose");



// Define the connection function

const connectToMongoDB = async (api_key) => {
    try {
        // encryption this  mongoDB Link To DB
        await mongoose.connect(api_key, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Optionally, you can add more options here
        });
        console.log("MongoDB Server Connected");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
                // Log additional details for debugging
                console.error("Error code:", error.code);
                console.error("Error message:", error.message);
                console.error("Error stack:", error.stack);
    }
};

// Export the connection function
module.exports = {
    connectToMongoDB,
};