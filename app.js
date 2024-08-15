const express = require("express");
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
const app = express();

app.use(express.json()); // allows us to send and receive json data in our request

app.get("/", (req, res) => {
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

app.use("/products", productRoutes);
app.use("/users", userRoutes);

module.exports = app;
