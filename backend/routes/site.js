const express = require(`express`);
const siteController = require(`./../controllers/site`);
const { jooodahResolver } = require('../utils/errorHandler');

const siteRouter = express.Router();

siteRouter.get("/", jooodahResolver(siteController.getSiteData));
siteRouter.post("/", jooodahResolver(siteController.setSiteData));
// usersRouter.delete("/", jooodahResolver(siteController.deleteUser));


module.exports = siteRouter;
