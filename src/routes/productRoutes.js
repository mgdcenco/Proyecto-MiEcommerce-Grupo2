const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/product/:id", productController.showProduct);
router.get("/products/search", productController.searchProducts);

module.exports = router;
