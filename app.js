const express = require("express");

const app = express();

app.use(express.json()); // allows us to send and receive json data in our request
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
  res.status(200).json({
    status: "success",
    message: "All products gotten successfully",
    data: products,
  });
});

// Get Single product
app.get("/products/:id", (req, res) => {
  try {
    console.log(req.params);
    // const productId = req.params.id;
    const { id } = req.params;
    // console.log("Product id is", id);
    const product = products.find((prod) => prod.id == id);

    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    // console.log(product);
    res.status(200).json({
      status: "success",
      message: "Product gotten successfully",
      data: product,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
});

// Create new product
app.post("/products", (req, res) => {
  try {
    console.log(req.body);
    const { title, price } = req.body;
    if (!title || !price) {
      throw new Error("Please fill in both title and price");
    }
    const newId = products.length + 1;

    const newProduct = {
      id: newId,
      title: title,
      price: price,
    };

    products.push(newProduct);
    res.status(201).json({
      status: "success",
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
});

module.exports = app;
