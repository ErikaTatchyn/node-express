const express = require("express");
const router = express.Router();

// визначимо домашній роутер
router.get("/", (req, res) => {
  res.send("Це головний роутер");
});

// визначимо роутер about
router.get("/about", (req, res) => {
  res.send("About");
});

module.exports = router;
