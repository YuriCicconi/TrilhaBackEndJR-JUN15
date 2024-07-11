const knex = require('../database/connection');

async function createUser(req, res) {

    const { name, email, password, age } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Please inform the user name.' });
    }

    if (!email) {
        return res.status(400).json({ message: 'Please, inform an email.' });
    }

    if (!password) {
        return res.status(400).json({ message: 'Please, inform a password.' });
    }

    try {
        const user = { name, age, email, password };

        const newUser = await knex('users').insert(user).returning('*');

        return res.status(201).json(newUser[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function returnUsers(req, res) {

}

module.exports = {
    createUser,
    returnUsers
}