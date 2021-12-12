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
        message: `Not found task id: ${taskId}`,
        data: "Not Found",
      });
    }
    res.status(201).json({
      status: "succsess",
      code: 201,
      message: `Task id: ${taskId} removed`,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = deleteTask;
