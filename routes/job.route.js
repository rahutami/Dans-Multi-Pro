const express = require("express");
const router = express.Router();
const jobController = require("../controller/job.controller");

// Get All Jobs
router.get("/", jobController.getAll);

// Get Detail Jobs
router.get("/:id", jobController.getDetail);

module.exports = router;
