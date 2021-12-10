const express = require("express");
const router = express.Router();
const { taskControllers } = require("../controllers");

router.delete("/:taskId");
router.post("/addTask", taskControllers.addTask);
router.get("/allTasks", taskControllers.getAllTasks);

module.exports = router;
