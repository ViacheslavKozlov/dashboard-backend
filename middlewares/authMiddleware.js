const jwt = require("jsonwebtoken");
const { Unautorized } = require("../helpers/errHandler.js");
const { findUserById } = require("../services/userServices/userSrvs.js");

require("dotenv").config();
const { SECRET_KEY } = process.env;

const authorization = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new Unautorized("Not authorized");
  }

  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    throw new Unautorized("Not authorized");
  }

  try {
    const { _id } = jwt.verify(token, SECRET_KEY);
    const user = await findUserById(_id);
    if (!user.token) {
      throw new Unautorized("Not authorized");
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authorization;
