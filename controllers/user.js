const users = require("./../models/user");

const getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "All users gotten successfully",
    result: users.length,
    data: users,
  });
};

const getSingleUser = (req, res) => {
  try {
    const { id } = req.params;

    const user = users.find((user) => user.id == id);

    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }

    res.status(200).json({
      status: "success",
      message: "User gotten successfully",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

const getSingleUserByFirstName = (req, res) => {
  try {
    const { firstname } = req.body;

    if (!firstname) {
      throw new Error("Please provide your firstname");
    }

    const user = users.find(
      (user) => user.firstname.toLowerCase() === firstname.toLowerCase()
    );

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: `User with firstname ${firstname} not found`,
      });
    }

    res.status(200).json({
      status: "success",
      message: "User gotten successfully",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = { getAllUsers, getSingleUser, getSingleUserByFirstName };
