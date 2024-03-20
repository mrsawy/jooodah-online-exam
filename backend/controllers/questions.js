const formatQuestion = require("../utils/formatQuestion.js");
const formatQuestions = require("../utils/formatQuestions.js");
const Level = require(`./../models/level.js`);
const { beginner } = require(`./../constans/questions`);

module.exports = {
  addQuestion: async (req, res) => {
    const { levelId } = req.body;
    try {
      const existingLevel = await Level.findById(levelId);
      if (!existingLevel) {
        throw new Error(`Wrong ID`);
      }
      if (!existingLevel?.questions) {
        existingLevel.questions = [];
      }
      let question = formatQuestion(req.body);
      existingLevel.questions.push(question);
      existingLevel.save();
      res.status(200).json({ questions: existingLevel?.questions });
    } catch (e) {
      console.log(e);
    }
  },
  setQuestions: async (req, res) => {
    const { levelId, questionsArr } = req.body;
    try {
      const existingLevel = await Level.findById(levelId);
      if (!existingLevel) {
        throw new Error(`Wrong ID`);
      }
      if (!existingLevel?.questions) {
        existingLevel.questions = [];
      }
      // let questions = formatQuestions(questionsArr);
      existingLevel.questions = beginner
      // JSON.stringify();
      existingLevel.save();
      res.status(200).json({ questions: existingLevel?.questions });
    } catch (e) {
      console.log(e);
    }
  },
  deleteQuestion: async (req, res) => {
    const { levelId, questionId } = req?.body;
    console.log(req.body);
    const existingLevel = await Level.findById(levelId);
    if (!existingLevel) {
      throw new Error(`Wrong ID`);
    }
    if (!existingLevel?.questions) {
      existingLevel.questions = [];
    }
    existingLevel.questions = existingLevel?.questions.filter((q) => q._id != questionId);
    existingLevel.save();
    const level = await Level.find();
    res.status(200).json({ questions: existingLevel?.questions, level });
  },
  getAllQuestions: async (req, res) => {
    let { levelId } = req.params;
    const existingLevel = await Level.findById(levelId);
    if (!existingLevel) {
      throw new Error(`Wrong ID`);
    }
    res.status(200).json(existingLevel?.questions ? existingLevel?.questions : []);
  },
  getOneQuestion: async (req, res) => {},
};
