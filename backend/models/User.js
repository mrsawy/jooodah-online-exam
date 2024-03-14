const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
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
    fullTime: {
      type: Number,
      required: false,
    },
    result: {
      grade: Number,
      fullGrade: Number,
      levelId: { type: mongoose.Types.ObjectId },
      levelName: String,
      timeTaken: Number,
      totalQuestions: Number,
      correctAnswers: Number,
      questionsAndAnswers: [],
      fullTime: {
        type: Number,
        required: false,
      },
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
