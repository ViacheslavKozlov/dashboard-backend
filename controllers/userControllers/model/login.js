const jwt = require("jsonwebtoken");
const { User } = require("../../../schemas");
const { userServices } = require("../../../services");
const { Unautorized } = require("../../../helpers/errHandler.js");
require("dotenv").config();
const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user || !user.comparePassword(password)) {
      throw new Unautorized("Email or password are not verified");
    }

    const { _id } = user;
    const payload = { _id };
    const token = jwt.sign(payload, SECRET_KEY);

    await userServices.loginUser(_id, token);

    res.json({
      status: "OK",
      code: 200,
      data: {
        token,
        user: {
          email: email,
          password: password
        }
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
