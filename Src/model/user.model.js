const { DataTypes } = require('sequelize');
const db = require('../config/config');

const user = db.sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mobile_number: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_delete: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue:false
    }
}, {
    tableName: 'User'
})

module.exports = user;