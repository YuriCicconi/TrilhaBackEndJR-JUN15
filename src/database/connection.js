require('dotenv').config();
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: 'C:/Users/USER/Desktop/Codigo Certo - Trilha Backend/TrilhaBackEndJR-JUN15/src/database/project.db3',
    },
    useNullAsDefault: true,
});

module.exports = knex;