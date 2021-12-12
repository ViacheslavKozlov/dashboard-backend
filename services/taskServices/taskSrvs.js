const { Task } = require("../../schemas");

const createTask = (userId, body) => {
  //   const date = new Date();
  // taskDate: date,
  return Task.create({ ...body, owner: userId });
};

const getAllTasks = () => {
  const result = Task.find();
  return result;
};
const deleteTask = (userId, taskId) => {
  const result = Task.findByIdAndRemove({ _id: taskId, owner: userId });

  return result;
};
module.exports = { createTask, deleteTask, getAllTasks };
