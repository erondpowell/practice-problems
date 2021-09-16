const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("First middleware handles just users");
  res.send("<h1>First middleware handles just users</h1>");
});

app.use("/", (req, res, next) => {
  console.log("second middleware handles everything");
  res.send("<h1>Assignment almost solved</h1>");
});

app.listen(3000);
