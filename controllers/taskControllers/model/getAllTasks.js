const { taskServices } = require("../../../services/index");

const getAllTasks = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const result = await taskServices.getAllTasks(userId);
    res.status(200).json({
      stastus: "success",
      code: 200,
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = getAllTasks;
