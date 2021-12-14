const { taskServices } = require("../../../services/index");

const getAllTasks = async (req, res, next) => {
  try {
    const result = await taskServices.getAllTasks();
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
