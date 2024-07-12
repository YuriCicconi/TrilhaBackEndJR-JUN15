const knex = require('../database/connection');

async function createTask(req, res) {
    const { name, description } = req.body;
    const user_id = req.userId;

    if (!name) return res.status(400).json({ message: 'Name is a required field.' });

    try {
        const task = { user_id, name, description };

        const newTask = await knex('tasks').insert(task).returning('*');

        return res.status(201).json(newTask);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function returnTasks(req, res) {
    try {
        const result = await knex('tasks');

        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createTask,
    returnTasks
}