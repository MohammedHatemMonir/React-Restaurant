const mongoose = require("mongoose");
// Define the connection function

const connectToMongoDB = async (dbConn) => {
    try {
        // encryption this  mongoDB Link To DB
        await mongoose.connect(
            dbConn, {
            // This is a Deprecated Options
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log("Connected To MongoDB");
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