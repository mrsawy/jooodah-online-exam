const User = require(`./../models/User`);

module.exports = {
  deleteUser: async (req, res) => {
    const { userId } = req.params;
    const deletedUser = await Level.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "Level not found" });
    }
    res.json(deletedUser);
  },
  createUser: async (req, res) => {
    let { name, job, email, phone, result } = req.body;
    let newData = { name, job, email, phone, result };
    const createdLevel = await Level.create(newData);
    return res.status(200).json(1);
  },
  getAllUsers: async (req, res) => {
    let users = await User.find();
    res.json(users);
  },
  getOneUser: async (req, res) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Level not found" });
    }
    res.json(user);
  },
};
