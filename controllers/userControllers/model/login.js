const jwt = require("jsonwebtoken");
const { User } = require("../../../schemas");
const { userServices } = require("../../../services");
const { Unautorized } = require("../../../helpers/errHandler.js");
require("dotenv").config();
const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await userServices.findUserByEmail({ email });

    if (!user || !user.comparePassword(password)) {
      throw new Unautorized("Email or password are not verified");
    }

    const { _id, name } = user;
    const payload = { _id };
    const token = jwt.sign(payload, SECRET_KEY);

    await userServices.loginUser(_id, token);

    res.json({
      status: "OK",
      code: 200,
      data: {
        token,
        user: {
          name: name,
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
