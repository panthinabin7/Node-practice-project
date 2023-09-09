const authController = require("../controller/auth");
const express = require("express");
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
exports.router = router;
