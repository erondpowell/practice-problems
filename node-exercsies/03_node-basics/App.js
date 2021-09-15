const express = require("express");

const app = express();


app.use('/add-product', (req, res, next) => {
  console.log('always do this');
  next();
});


app.use('/add-product', (req, res, next) => {
  console.log("in a new middleware");
  res.send('<h1>Add Product page</h1>');
});


app.use('/', (req, res, next) => {
  console.log("in a new middleware");
  res.send('<h1>Hey Ya</h1>');
});

app.listen(3000);
