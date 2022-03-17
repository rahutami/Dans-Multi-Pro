const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/data.sqlite",
  define: { freezeTableName: true },
});

module.exports = sequelize;
