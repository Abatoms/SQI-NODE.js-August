const express = require("express");
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./../controllers/product");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
router.post("/", createProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
