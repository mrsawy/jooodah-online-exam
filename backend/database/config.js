const mongoose = require("mongoose");
const { DB_URI } = process.env; // Replace with your actual database URI
//
// mongoose.once(`error`, (err) => {
//   console.log(err);
// });
// connect
const db = mongoose.connect(DB_URI);

module.exports = db;
