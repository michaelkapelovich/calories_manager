/*
name: Matan Katsnelson, ID: 208322248
name: Michael Kapelovich, ID: 336137377
*/

// Import required modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;                // Schema definition object from mongoose

// Define a new mongoose schema for storing calorie data
const calorieSchema = new mongoose.Schema({
    user_id: Number,
    year: Number,
    month: Number,
    day: Number,
    description: String,
    category: String,
    amount: Number,
});

// Create a model named 'calories' using the defined schema
const Calories = mongoose.model('calories', calorieSchema);  // This will map to the 'calories' collection in MongoDB

// Export the Calories model so it can be used in other parts of the application
module.exports = Calories;