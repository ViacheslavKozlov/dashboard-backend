const { Task } = require("../../schemas");

const createTask = (userId, body) => {
  return Task.create({ ...body, owner: userId });
};

const getAllTasks = () => {
  const result = Task.find();
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
  console.log("🚀 ~ file: taskSrvs.js ~ line 28 ~ updateTask ~ data", data);

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
