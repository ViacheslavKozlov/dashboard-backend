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

module.exports = { createUser, loginUser };
