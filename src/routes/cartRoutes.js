const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController")

router.get("/cart", cartController.showCart);

module.exports = router;