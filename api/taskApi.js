const express = require("express");
const router = express.Router();
const { taskControllers } = require("../controllers");
const authorization = require("../middlewares/authMiddleware.js");

router.delete("/:taskId", authorization, taskControllers.deleteTask);
router.post("/addTask", authorization, taskControllers.addTask);
router.get("/allTasks", authorization, taskControllers.getAllTasks);
router.patch(
  "/:taskId/compleated",
  authorization,
  taskControllers.updateStatus
);
router.patch("/:taskId", authorization, taskControllers.updateTask);

module.exports = router;
