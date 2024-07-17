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

async function getTask(req, res) {
    const { id } = req.params;

    if (isNaN(id)) return res.status(400).json({ message: 'Please, inform a valid number as parameter' });

    try {
        const task = await knex('tasks').where({ id });

        if (!task[0]) return res.status(404).json({ message: 'Task not found.' });
        return res.status(200).json(task[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function updateTask(req, res) {
    const { name, description } = req.body;
    const { id } = req.params;
    const user_id = req.userId;

    if (isNaN(id)) return res.status(400).json({ message: 'Please, inform a valid number as parameter.' });

    if (!name && !description) {
        return res.status(400).json({ message: 'Please, insert at least one change to be made.' });
    }

    try {
        const validUser = await knex.select('id', 'name', 'description').where('user_id', '=', user_id).andWhere('id', '=', id).from('tasks');

        if (validUser.length > 0) {
            if (name && description) {
                const updatedTask = await knex('tasks').update({ name: name, description: description }).where({ id }).returning('*');
                return res.status(200).json(updatedTask);
            } else if (name) {
                const updatedTask = await knex('tasks').update({ name: name }).where({ id }).returning('*');
                return res.status(200).json(updatedTask);
            } else {
                const updatedTask = await knex('tasks').update({ description: description }).where({ id }).returning('*');
                return res.status(200).json(updatedTask);
            }
        } else {
            return res.status(401).json({ message: 'Task not found.' });
        }


    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

async function deleteTask(req, res) {
    const { id } = req.params;
    const user_id = req.userId;

    if (isNaN(id)) return res.status(400).json({ message: 'Please, inform a valid number as parameter.' });

    try {
        const validUser = await knex.select('id', 'name', 'description').where('user_id', '=', user_id).andWhere('id', '=', id).from('tasks');

        if (validUser.length > 0) {
            await knex('tasks').where({ id }).del();
            return res.status(200).json({ message: 'Task deleted succesfully.' });
        } else {
            return res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createTask,
    returnTasks,
    getTask,
    updateTask,
    deleteTask
}