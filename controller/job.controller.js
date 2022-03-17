const { default: axios } = require("axios");
const express = require("express");

async function getAll(req, res) {
  const { description, location, full_time } = req.query;

  const query = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?${
    description ? `description=${description}&` : ""
  }${location ? `location=${location}&` : ""}${
    full_time ? `full_time=${full_time}` : ""
  }`;

  const result = await axios.get(query);

  res.status(result.status).send(result.data);
}

async function getDetail(req, res) {
  const { id } = req.params;
  const query = `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`;

  const result = await axios.get(query);

  res.status(result.status).send(result.data);
}

module.exports = {
  getAll,
  getDetail,
};
