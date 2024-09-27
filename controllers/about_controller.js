/*
name: matan katsnelson id: 208322248
name: michael kapelovich id: 336137377
*/

exports.getAbout = (req, res) => {
    res.json([
        {
            firstname: 'Matan',
            lastname: 'Katsnelson',
            id: 208322248,
            email: 'matanson1802@gmail.com'
        },
        {
            firstname: 'Michael',
            lastname: 'Kapelovich',
            id: 336137377,
            email: 'misha.kapelovich@gmail.com'
        }
    ]);
};