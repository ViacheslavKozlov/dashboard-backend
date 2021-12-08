const { Schema, model } = require("mongoose");

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true
    },
    password: {
      type: String,
      required: [true, "Password is required"]
    },
    token: {
      type: String,
      default: null
    }
    // verify: {
    //   type: Boolean,
    //   default: false
    // },
    // verifyToken: {
    //   type: String,
    //   required: [true, "Verify token is required"]
    // }
  },
  { versionKey: false, timestamp: true }
);

const User = model("users", userSchema);

module.exports = User;
