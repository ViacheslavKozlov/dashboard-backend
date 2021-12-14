const jwt = require("jsonwebtoken");
const { userServices } = require("../../../services");
const { Unautorized } = require("../../../helpers/errHandler.js");
require("dotenv").config();
const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await userServices.findUserByEmail({ email });
    console.log(user);
    if (!user || !user.comparePassword(password)) {
      throw new Unautorized("Email or password are not verified");
    }

    const { _id, displayName } = user;
    const payload = { _id };
    const token = jwt.sign(payload, SECRET_KEY);

    await userServices.loginUser(_id, token);
    console.log(user);
    res.json({
      status: "OK",
      code: 200,
      data: {
        token,
        user: {
          name: displayName,
          email: email,
          password: password,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
