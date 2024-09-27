/*
name: Matan Katsnelson, ID: 208322248
name: Michael Kapelovich, ID: 336137377
*/

// Import the required modules
const express = require('express');
const bodyParser = require('body-parser');
const connectToDb = require('./config/db');

// Import route handlers (controllers)
const aboutRouter = require('./routes/about');
const usersRouter = require('./routes/users');
const reportRouter = require('./routes/report');
const addingCalories = require('./routes/addcalories');

// Create an Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());  // Allows the server to process JSON data in incoming requests

// Connect to MongoDB database
connectToDb();  // Function that establishes a connection to the MongoDB database

// Set up the routes for different parts of the API
app.use('/about', aboutRouter);
app.use('/users', usersRouter);
app.use('/report', reportRouter);
app.use('/addcalories', addingCalories);

// Export the app module to be used by the server (e.g., in a testing file or server startup)
module.exports = app;
