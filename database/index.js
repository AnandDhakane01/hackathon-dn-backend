const { Sequelize } = require("sequelize");

const {
    sequelize_database,
    sequelize_username,
    sequelize_password,
    sequelize_dialect,
    sequelize_host,
} = require("../config");

const sequelize = new Sequelize(
    sequelize_database,
    sequelize_username,
    sequelize_password,
    {
        host: sequelize_host,
        dialect: sequelize_dialect,
    }
);

sequelize.sync();

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (err) {
        console.error("Unable to connect to the database:", err);
    }
})();

module.exports = sequelize;