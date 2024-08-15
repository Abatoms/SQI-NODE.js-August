const products = require("./../models/product");

const getAllProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "All products gotten successfully",
    data: products,
  });
};

const getSingleProduct = (req, res) => {
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
};

const createProduct = (req, res) => {
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
};

const updateProduct = (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    // console.log(name, price);

    if (!name && !price) {
      throw new Error("Please provide name or price to update");
    }

    const product = products.find((prod) => prod.id === Number(id));

    if (!product) {
      throw new Error(`Product with the id ${id} not found`);
    }

    // console.log(product);
    products[product.id - 1] = {
      ...product,
      name: name || product.name,
      price: price || product.price,
    };

    res.status(200).json({
      status: "success",
      message: "Product updated successfully",
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

const deleteProduct = (req, res) => {
  try {
    const { id } = req.params;
    const product = products.find((prod) => prod.id === Number(id));

    if (!product) {
      throw new Error(`Product with the id ${id} not found`);
    }

    products.splice(product.id - 1, 1);

    res.status(200).json({
      status: "success",
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
