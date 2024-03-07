const Admin = require(`./../models/Admin`);
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async (req, res) => {
    let { email, password } = req.body;
    // console.log(email , password)
    const admin = await Admin.findOne({ email });
    // console.log(admin)

    if (!admin) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign({ id: admin._id, email }, "secret_key");
    res.json({ token, id: admin._id });
  },
  signUp: async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new Admin({ email, password: hashedPassword });
    await admin.save();
    const token = jwt.sign({ id: admin._id, email }, "secret_key");
    res.status(201).json({ token, id: admin._id });
  },
  checkAuth: async (req, res) => {
    const { token, id } = req.body;

    if (!token && !id) {
      return res.status(403).json({ error: "Access forbidden. Token missing." });
    }
    const admin = await Admin.findById(id);

    jwt.verify(token, "secret_key", (err, decoded) => {
      // console.log(admin , decoded , err)
      if (err && !admin) {
        return res.status(401).json({ error: "Unauthorized. Invalid token." });
      } else if ((!err && admin) || (!err && !admin)) {
        return res.status(200).json({ token, email: decoded.email, id: decoded.id });
      } else if (err && admin) {
        res.status(200).json({ email: admin.email, id: admin.id });
      }
    });
  },
};
