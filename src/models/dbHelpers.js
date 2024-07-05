const db = require('./dbConfig');

async function addUser(user) {
    const [id] = await db('users').insert(user);

    return id;
}

async function getUsers() {
    return await db('users');
}

module.exports = {
    addUser,
    getUsers
}