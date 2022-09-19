const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/login", userController.showLogin);

router.get("/register", userController.showRegister);

module.exports = router;
