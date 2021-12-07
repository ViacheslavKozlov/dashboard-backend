const express = require("express");
const router = express.Router();
const { userControllers } = require("../controllers");

router.post("/signup");
router.post("/login");
router.post("/logout");
router.get("/verify/:verificationToken");
router.post("/verify");

module.exports = router;
