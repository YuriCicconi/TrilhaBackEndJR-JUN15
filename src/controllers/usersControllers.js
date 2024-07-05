const helpers = require('../models/dbHelpers');

async function createUser(req, res) {

    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Please inform the user name.' });
    }


    helpers.addUser(req.body)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(error => {
            res.status(500).json({ message: "Something went wrong." });
        })
}

async function returnUsers(req, res) {
    helpers.getUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            res.status(500).json({ message: "Something went wrong." });
        })
}

module.exports = {
    createUser,
    returnUsers
}