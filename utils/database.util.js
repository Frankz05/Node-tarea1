const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'panetone007',
    port: 5432,
    database: 'dbTarea1',
    logging: false,
});

module.exports = { db, DataTypes };
