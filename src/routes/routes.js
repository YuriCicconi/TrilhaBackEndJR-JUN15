
const express = require('express');
const users = require('../controllers/usersControllers');
const tasks = require('../controllers/taskControllers');
const verifyUser = require('../middlewares/verifyUser');
const routes = express();

routes.get('/', (req, res) => {
    return res.json({ message: "Funcionou" })
})
routes.post('/api/login', users.login);
routes.post('/api/users', users.createUser);

routes.use(verifyUser);

routes.get('/api/users', users.returnUsers);

routes.post('/api/tasks', tasks.createTask);
routes.get('/api/tasks/:id', tasks.getTask)
routes.get('/api/tasks', tasks.returnTasks);
routes.patch('/api/tasks/:id', tasks.updateTask);
routes.delete('/api/tasks/:id', tasks.deleteTask);

module.exports = routes;