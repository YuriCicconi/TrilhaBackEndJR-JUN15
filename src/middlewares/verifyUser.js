const knex = require('knex');
const jwt = require('jsonwebtoken');
const jwtPass = require('../../jwtPassword');

const verifyUser = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Access denied.' });

    try {

        const cleanToken = jwt.verify(token.replace('Bearer ', ''), jwtPass);

        req.userId = cleanToken.id;

        next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


module.exports = verifyUser;