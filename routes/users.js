/*
name: Matan Katsnelson, ID: 208322248
name: Michael Kapelovich, ID: 336137377
*/

// Import required modules
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user_controller');

// Route to get user details by their ID
router.get('/:id', usersController.getUser);

// Export the router
module.exports = router;
