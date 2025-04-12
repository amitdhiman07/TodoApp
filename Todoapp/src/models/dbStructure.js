// Dependencies
const sequelize = require('../config/config');
const { DataTypes } = require('sequelize');


// Create Task table
const Task = sequelize.define('Task', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
});


// Inserting Data inside the Task table
async function initializingDbStructure() {
    await Task.sync(); //This creates the table if it doesn't exist (and does nothing if it already exists)
}

module.exports = {Task , initializingDbStructure};
