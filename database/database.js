const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', 'queijos00', {
    host: 'localhost', 
    dialect: 'mysql'
});

module.exports = connection;