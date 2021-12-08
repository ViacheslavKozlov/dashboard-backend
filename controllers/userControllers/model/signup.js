const { User } = require("../../../schemas");
const { Conflict } = require("../../../helpers/errHandler.js");
const { createUser } = require("../../../services/userServices/userSrvs.js");

const signup = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const data = await User.findOne({ email });
    if (data) {
      throw new Conflict("Email in use");
    }

    // const user = await createUser(req.body);
    const user = new User({
      name,
      email
    });
    console.log(user);
    user.setPassword(password);
    await user.save();

    res.status(201).json({
      status: "created",
      code: 201,
      data: user
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
