const { taskServices } = require("../../../services/index");

const updateStatus = async (req, res, next) => {
  const { taskId } = req.params;

  const { compleated } = req.body;
  const userId = req.user.id;

  try {
    const result = await taskServices.updateStatus(userId, taskId, compleated);

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
    console.error(e);
    next(e);
  }
};

module.exports = updateStatus;
