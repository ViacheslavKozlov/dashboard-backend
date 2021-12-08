const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

userSchema.methods.setPassword = function(password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.createToken = function() {
  const payload = { _id: this._id };
  return jwt.sign(payload, SECRET_KEY);
};

const User = model("users", userSchema);

module.exports = User;
