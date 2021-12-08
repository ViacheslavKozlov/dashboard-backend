const { User } = require("../../../schemas");
const { userServices } = require("../../../services");

const logout = async (req, res, next) => {
  const { _id } = req.user;
  try {
    await userServices.logoutUser(_id);
    res.json({
      ststus: "No content",
      code: 204,
      message: "Logout successfull"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = logout;
