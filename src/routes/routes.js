
const express = require('express');
const users = require('../controllers/usersControllers');
const tasks = require('../controllers/taskControllers');
const verifyUser = require('../middlewares/verifyUser');
const routes = express();

routes.post('/api/login', users.login);
routes.post('/api/users', users.createUser);

routes.use(verifyUser);

routes.get('/api/users', users.returnUsers);

routes.post('/api/tasks', tasks.createTask);
routes.get('/api/tasks', tasks.returnTasks);

module.exports = routes;