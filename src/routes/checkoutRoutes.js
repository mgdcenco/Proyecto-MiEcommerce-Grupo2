const express = require("express");
const router = express.Router();
const checkoutController = require("../controllers/checkoutController")
const notImplemented = require("../middlewares/notImplemented")

router.get("/checkout", notImplemented,checkoutController.showCheckout);

module.exports = router;