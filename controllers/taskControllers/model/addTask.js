const { taskServices } = require("../../../services/index");

const addTask = async (req, res, next) => {
  const userId = req.user.id;

  try {
    const result = await taskServices.createTask(userId, req.body);
    res.status(200).json({
      status: "success",
      code: 200,
      data: { task: result },
    });
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = addTask;
