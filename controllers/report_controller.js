/*
name: matan katsnelson id: 208322248
name: michael kapelovich id: 336137377
*/

const Calorie = require('../models/calorie');

exports.getReport = async (req, res) => {
    try {
        // Destructuring assignment to extract specific query parameters from the request object
        const { user_id, year, month } = req.query;

        // Define the categories
        const categories = ['breakfast', 'lunch', 'dinner', 'other'];

        // Initialize the report with empty arrays for each category
        const report = {
            breakfast: [],
            lunch: [],
            dinner: [],
            other: [],
        };

        // Retrieve and organize calorie entries by category
        for (let category of categories) {

            // Find calorie entries for the specific user, year, month, and category
            const calories = await Calorie.find(
                { user_id, year, month, category },
                'day description amount -_id'
            );

            // Assign the retrieved entries to the corresponding category in the report
            report[category] = calories;
        }

        // Respond with the report
        res.json(report);
    } catch (err) {
        // Handle any errors
        res.status(500).send({ error: err.message });
    }
};