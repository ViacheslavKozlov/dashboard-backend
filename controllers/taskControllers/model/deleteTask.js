const { taskServices } = require("../../../services/index");

const deleteTask = async (req, res, next) => {
  const { taskId } = req.params;
  const userId = req.user.id;
  try {
    const result = await taskServices.deleteTask(userId, taskId);
    if (!result) {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: `Not found task with such id: ${taskId}`,
      });
    }
    res.status(200).json({
      status: "succsess",
      code: 200,
      message: `Task with such id: ${taskId} removed`,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = deleteTask;
