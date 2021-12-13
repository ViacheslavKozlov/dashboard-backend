const { Schema, model } = require("mongoose");

const taskSchema = Schema(
  {
    isChallenge: {
      type: Boolean,
      default: false,
    },
    difficulty: {
      type: String,
      enum: ["easy", "normal", "hard"],
      default: "easy",
    },
    taskName: {
      type: String,
      required: true,
    },
    taskDate: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      enum: ["stuff", "family", "health", "learning", "leisure", "work"],
      default: "stuff",
    },
    compleated: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { versionKey: false, timestamp: true }
);

const Task = model("tasks", taskSchema);

module.exports = Task;
