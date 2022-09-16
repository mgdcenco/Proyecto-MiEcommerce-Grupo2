const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController")

router.get("/product/:id", productController.showProduct);

module.exports = router;