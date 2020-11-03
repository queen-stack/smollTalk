const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Conversation extends Model{}

Conversation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        topic_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'conversation'
    }
);

module.exports = Conversation;
