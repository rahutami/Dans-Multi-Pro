const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const jwt = require("jsonwebtoken");

const authRoute = require("./routes/auth.route");
const jobRoute = require("./routes/job.route");

// Middleware
app.use(bodyParser.json());

// Route
app.use("/auth", authRoute);
app.use("/jobs", authenticate, jobRoute);

function authenticate(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.sendStatus(401);
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}
app.listen(3000, () => {
  console.log("App running on port 3000");
});
