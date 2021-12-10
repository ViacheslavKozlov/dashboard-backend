const { Task } = require("../../schemas");

const createTask = (body) => {
  const date = new Date();
  return Task.create({ ...body, taskDate: date });
};

const getAllTasks = () => {
  const tasks = Task.find();
  return tasks;
};
const deleteTask = (body) => {};
module.exports = { createTask, deleteTask, getAllTasks };
