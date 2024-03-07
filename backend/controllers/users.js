const User = require(`./../models/User`);

module.exports = {
  check: async (req, res) => {
    let { email, phone } = req.body;
    let user = await User.findOne({ $or: [{ email }, { phone }] });
    if (user) {
      return res.status(403).json({ error: "User with the same email or phone already exists" });
    } else {
      res.status(200).json(1);
    }
  },
  deleteUser: async (req, res) => {
    const { userId } = req.body;
    console.log(req.body, userId, `<==userId`);
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      console.log(`no user founded`);
      return res.status(404).json({ message: "User not found" });
    }
    console.log(deletedUser);
    let users = await User.find();
    res.json(users);
  },
  createUser: async (req, res) => {
    let { userFormData } = req.body;
    let user = await User.create(userFormData);

    return res.status(200).json(user);
  },
  getAllUsers: async (req, res) => {
    let users = await User.find();
    res.json(users);
  },
  getOneUser: async (req, res) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ messag: "Level not found" });
    }
    res.json(user);
  },
};
