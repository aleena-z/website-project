const User = require("../models/User");

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

const updateUser = async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

const searchUsers = async (req, res) => {
  const keyword = req.query.keyword;
  const users = await User.find({
    username: { $regex: keyword, $options: "i" }
  });
  res.json(users);
};

module.exports = {
  getUsers,
  deleteUser,
  updateUser,
  searchUsers
};