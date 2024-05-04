const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('streamease', 'root', 'shayanshapater', {
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;
