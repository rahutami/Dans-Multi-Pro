const { timeStamp } = require("console");
const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
