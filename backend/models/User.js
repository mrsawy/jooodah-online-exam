const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    _id: {
      type: String, // Use String as the type for _id
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      //   unique: true, // Assuming email should be unique
    },
    phone: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    result: {
      grade: Number,
      fullGrade: Number,
      levelId: { type: mongoose.Types.ObjectId, ref: "level" },
      levelName: String,
    },
    allowTestAgain: {
      type: Number,
      defaultValue: 0,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
