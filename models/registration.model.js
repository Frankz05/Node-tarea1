const { db, DataTypes } = require('../utils/database.util');

const Registration = db.define('registration', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    entranceTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    exitTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'working',
    },
});

module.exports = { Registration };
