/*
name: matan katsnelson id: 208322248
name: michael kapelovich id: 336137377
*/

const User = require('../models/user');


exports.getUser = async (req, res) => {
    try {
        // Check if the user exists in the database
        const user = await User.findOne({ id: req.params.id });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });  // Handle user not found
        }

        // Respond with the user details
        res.json(user);
    } catch (err) {
        // Handle any errors
        res.status(500).send({ error: err.message });
    }
};