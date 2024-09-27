/*
name: matan katsnelson id: 208322248
name: michael kapelovich id: 336137377
*/

const Calorie = require('../models/calorie');
const User = require('../models/user');

// Controller to add a new calorie entry
exports.addCalorie = async (req, res) => {
    try {
        const { user_id, year, month, day, description, category, amount } = req.body;

        // Check if the user exists in the database
        const user = await User.findOne({id: user_id});
        if (!user) {
            return res.status(404).send({ error: 'User not found' });  // Handle user not found
        }

        // Create new calorie entry
        const newCalorie = new Calorie({
            user_id,
            year,
            month,
            day,
            description,
            category,
            amount
        });

        // Save the new calorie entry to the database
        await newCalorie.save();

        // Respond with the created entry description
        res.status(201).send(`Calories of ${newCalorie.description} added successfully`);
    } catch (err) {
        res.status(500).send({ error: err.message });  // Handle any errors
    }
};