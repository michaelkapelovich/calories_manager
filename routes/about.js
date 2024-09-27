/*
name: Matan Katsnelson, ID: 208322248
name: Michael Kapelovich, ID: 336137377
*/

// Import required modules
const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/about_controller');

// Route to get the 'About' page or information
router.get('/', aboutController.getAbout);

// Export the router to make it available in the main app (app.js)
module.exports = router;