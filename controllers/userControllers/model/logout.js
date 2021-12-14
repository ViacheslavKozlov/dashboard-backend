const { userServices } = require("../../../services");

const logout = async (req, res, next) => {
  const { _id } = req.user;
  console.log(req.user);
  try {
    await userServices.logoutUser(_id);
    res.json({
      status: "No content",
      code: 204,
      message: "Logout successfull",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = logout;
