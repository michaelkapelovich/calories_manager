/*
name: Matan Katsnelson, ID: 208322248
name: Michael Kapelovich, ID: 336137377
*/

// Import required modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new schema for the User model
const userSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    birthday: Date,
});

// Create a model named 'users' using the defined schema
const User = mongoose.model('users', userSchema);

// Export the User model so it can be used in other parts of the application
module.exports = User;
