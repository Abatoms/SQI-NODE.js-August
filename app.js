const express = require("express");

const app = express();

const products = [
  {
    id: 1,
    name: "iPhone 12",
    price: 1200,
  },
  {
    id: 2,
    name: "iPhone 13",
    price: 1300,
  },
  {
    id: 3,
    name: "iPhone 14",
    price: 1400,
  },
  {
    id: 4,
    name: "iPhone 15",
    price: 1500,
  },
];

app.get("/", (req, res) => {
  //   res.send("Hello World");
  //   res.send("Welcome to express.js");
  res.json({
    status: "success",
    message: "Welcome to express.js",
  });
});

app.get("/api", (req, res) => {
  res.json({
    status: "pending",
    message: "Welcome to our Express.js API",
  });
});

app.get("/products", (req, res) => {
  res.json({
    status: "success",
    message: "All products gotten successfully",
    data: products,
  });
});

module.exports = app;
