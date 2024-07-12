
const express = require('express');
const users = require('../controllers/usersControllers');
const verifyUser = require('../middlewares/verifyUser');
const routes = express();

// routes.use(verifyUser);
routes.post('/api/users', users.createUser);
routes.get('/api/users', users.returnUsers);

module.exports = routes;