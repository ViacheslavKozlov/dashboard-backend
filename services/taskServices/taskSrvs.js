const { Task } = require("../../schemas");

const createTask = (userId, body) => {
  return Task.create({ ...body, owner: userId });
};

const getAllTasks = (owner) => {
  const result = Task.find({ owner });
  return result;
};
const deleteTask = (userId, taskId) => {
  const result = Task.findOneAndDelete({ _id: taskId, userId });
  return result;
};

const updateStatus = (userId, taskId, status) => {
  const result = Task.findOneAndUpdate(
    { _id: taskId, userId },
    { completed: status },
    {
      new: true,
    }
  );
  return result;
};

const updateTask = (userId, taskId, data) => {
  const result = Task.findOneAndUpdate(
    { _id: taskId, userId },
    { ...data },
    {
      new: true,
    }
  );
  return result;
};

module.exports = {
  createTask,
  deleteTask,
  getAllTasks,
  updateStatus,
  updateTask,
};
