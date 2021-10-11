const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Student = sequelize.define("Student", {
    studentname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    discordid: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    github: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    // add a teamid foreign key
});

module.exports = Student;