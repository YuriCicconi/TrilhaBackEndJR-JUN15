const knex = require('../database/connection');
const bcrypt = require('bcrypt');

async function createUser(req, res) {

    const { name, email, password, age } = req.body;

    if (!name || !email || !password || !age) {
        return res.status(400).json({ message: 'Sorry, all fields are required.' });
    }
    let atIndex = -1;
    let atChanges = 0;

    let dotIndex = -1;

    for (let i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            atIndex = i;
            atChanges++;
        }

        if (atIndex == 0 || atIndex == email.length - 1) return res.status(400).json({ message: 'Invalid e-mail.' });
    }

    if (atChanges != 1) return res.status(400).json({ message: 'Invalid e-mail.' });

    for (let i = 0; i < email.length; i++) {
        let nextDotIndex = -1;

        if (email[i] == '.' && dotIndex != -1) {
            nextDotIndex = i;
            if (nextDotIndex == dotIndex + 1) return res.status(400).json({ message: 'Invalid e-mail.' });
        } else if (email[i] == '.') {
            dotIndex = i;
        }

        if (dotIndex == 0 || dotIndex == email.length - 1 || nextDotIndex == email.length - 1) return res.status(400).json({ message: 'Invalid e-mail.' });
    }

    try {
        const findUser = await knex('users').where({ email });

        if (findUser[0] !== undefined) return res.status(400).json({ message: 'E-mail already exists.' });

        const encryptedPass = await bcrypt.hash(password, 10);

        const user = { name, age, email, password: encryptedPass };

        const newUser = await knex('users').insert(user).returning('*');

        const { password: _, ...createdUser } = newUser[0];

        return res.status(201).json(createdUser);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function returnUsers(req, res) {
    try {
        const result = await knex.select('id', 'name', 'age', 'email').from('users');

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createUser,
    returnUsers
}