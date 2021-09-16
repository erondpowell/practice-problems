const express = require("express");

const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get("/add-product", (req, res, next) => {
  // console.log("in a new middleware");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// eslint-disable-next-line no-unused-vars
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
