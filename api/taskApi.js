const express = require("express");
const router = express.Router();
const { taskControllers } = require("../controllers");

router.delete("/:taskId");

module.exports = router;
