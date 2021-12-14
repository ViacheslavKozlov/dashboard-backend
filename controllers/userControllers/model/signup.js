const { User } = require("../../../schemas");
const { Conflict } = require("../../../helpers/errHandler.js");
const {
  findUserByEmail,
} = require("../../../services/userServices/userSrvs.js");

const signup = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  try {
    const data = await findUserByEmail({ email });
    if (data) {
      throw new Conflict("Email in use");
    }

    const user = new User({
      displayName,
      email,
    });

    console.log(user);

    user.setPassword(password);
    await user.save();

    res.status(201).json({
      status: "created",
      code: 201,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
