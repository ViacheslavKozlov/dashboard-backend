const { taskServices } = require("../../../services/index");

const updateTask = async (req, res, next) => {
  const { taskId } = req.params;

  const userId = req.user.id;
  const { isChallege, difficulty, taskName, taskDate, category, completed } =
    req.body;
  if (taskName === "") {
    return res.status(400).json({
      message: "fill in the field",
    });
  }
  try {
    const result = await taskServices.updateTask(userId, taskId, {
      isChallege,
      difficulty,
      taskName,
      taskDate,
      category,
      completed,
    });

    if (!result) {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found task id: ${taskId}`,
      });
    }

    res.status(201).json({
      status: "success",
      code: 201,
      data: { contact: result },
    });
  } catch (e) {
    next(e);
  }
};
module.exports = updateTask;
