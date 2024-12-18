const express = require("express");
const productController = require("../controller/productController")
const router = express.Router();

router.get("/products", productController.getProducts);
router.get("/product/:id", productController.getProductByid);
router.post("/product",productController.createProduct);
router.put("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);

module.exports = {router};