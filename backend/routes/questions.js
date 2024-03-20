const express = require(`express`);
const { jooodahResolver } = require("../utils/errorHandler");
const questionController = require(`./../controllers/questions`);
const questionsRouter = express.Router();

questionsRouter.post(`/add-one`, jooodahResolver(questionController.addQuestion));
questionsRouter.get(`/:levelId`, jooodahResolver(questionController.getAllQuestions));
questionsRouter.post(`/set-questions`, jooodahResolver(questionController.setQuestions));
questionsRouter.delete(`/`, jooodahResolver(questionController.deleteQuestion));

module.exports = questionsRouter;
