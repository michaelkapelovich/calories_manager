/*
name: matan katsnelson id: 208322248
name: michael kapelovich id: 336137377
*/

// Import the required modules
const mongoose = require('mongoose');  // Mongoose to connect to MongoDB
const dotenv = require('dotenv');      // dotenv to load environment variables from a .env file

// Load environment variables from the .env file into process.env
dotenv.config();

// Log the MongoDB connection string to verify it's correctly loaded from the environment
console.log(process.env.MONGODB_URL);

// Define an asynchronous function to connect to the MongoDB database
const connectToDb = async () => {
    // Check if the MongoDB connection string is defined in the environment variables
    if (!process.env.MONGODB_URL) {
        console.error('MongoDB connection string is not defined. Check your environment variables.');
        process.exit(1);
    }

    // Attempt to connect to MongoDB using Mongoose
    await mongoose.connect(process.env.MONGODB_URL, {})
        .then(() =>
            console.log("Connected To DB Successfully....")
        )
        .catch(err => {
            console.error('Error connecting to MongoDB:', err.message);
            process.exit(1);
        });
}

// Export the connectToDb function for use in other parts of the application
module.exports = connectToDb;
