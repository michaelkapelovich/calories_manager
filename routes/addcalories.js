/*
name: Matan Katsnelson, ID: 208322248
name: Michael Kapelovich, ID: 336137377
*/

// Import required modules
const express = require('express');
const router = express.Router();
const caloriesController = require('../controllers/calories_controller');

// Route to add a new calorie entry
router.post('/', caloriesController.addCalorie);

// Export the router so it can be used in the main app (app.js)
module.exports = router;
