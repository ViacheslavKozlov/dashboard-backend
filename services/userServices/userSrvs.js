const { User } = require("../../schemas");

const createUser = async body => {
  try {
    const user = await User.create(body);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

const loginUser = async (_id, token) => {
  try {
    const user = await User.findByIdAndUpdate(_id, { token });
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

const logoutUser = async _id => {
  try {
    await User.findByIdAndUpdate(_id, { token: null });
  } catch (error) {
    console.log(error.message);
  }
};

const findUserByEmail = async ({ email }) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.log(error.message);
  }
};
const findUserById = async _id => {
  try {
    const user = await User.findById(_id);
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createUser,
  loginUser,
  logoutUser,
  findUserByEmail,
  findUserById
};
