const { Schema, model } = require("mongoose");

const taskSchema = Schema({}, { versionKey: false, timestamp: true });

const Task = model("tasks", taskSchema);

module.exports = Task;
