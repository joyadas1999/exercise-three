const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("request", request);

  res.send("Home Page: Exercise Three");
});

module.exports = router;
