
const express = require('express');
const users = require('../controllers/usersControllers');
const routes = express();

routes.post('/api/users', users.createUser);
routes.get('/api/users', users.returnUsers);

module.exports = routes;