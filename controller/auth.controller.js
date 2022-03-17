const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/user.model");

async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        username,
        password,
      },
    });

    if (!user) {
      return res
        .status(404)
        .send({ message: "Username or password incorrect" });
    }

    const token = jwt.sign(user.dataValues, process.env.ACCESS_TOKEN);
    res.send({ message: "Login succesful", token });
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
}

module.exports = {
  login,
};
