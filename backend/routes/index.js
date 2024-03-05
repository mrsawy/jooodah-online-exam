const express = require(`express`);
const questions = require("../controllers/questions");
const levelsRouter = require("./levels");
const userRouter = require("./users");
const questionsRouter = require("./questions");

const mainApiRoute = express.Router();

mainApiRoute.use("/questions", questionsRouter);
mainApiRoute.use("/level", levelsRouter);
mainApiRoute.use("/user", userRouter);
mainApiRoute.use("/", levelsRouter);

module.exports = mainApiRoute;
