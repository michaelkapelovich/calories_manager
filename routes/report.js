/*
name: Matan Katsnelson, ID: 208322248
name: Michael Kapelovich, ID: 336137377
*/

// Import required modules
const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report_controller');

// Route to get a report of calorie entries
router.get('/', reportController.getReport);

// Export the router to be used in the main app (app.js)
module.exports = router;