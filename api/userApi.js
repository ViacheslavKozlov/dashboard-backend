const express = require("express");
const router = express.Router();
const { userControllers } = require("../controllers");
const authorization = require("../middlewares/authMiddleware.js");

router.post("/signup", userControllers.signup);
router.post("/login", userControllers.login);
router.post("/logout", authorization, userControllers.logout);

module.exports = router;
