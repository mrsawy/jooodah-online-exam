const express = require("express");
var cors = require("cors");
var path = require("path");

const mainApiRoute = require("./routes/index");
require("dotenv").config();
const db = require("./database/config");
const { notFound, errorHandler } = require("./utils/errorHandler");

const app = express();
const { PORT = 3000 } = process.env;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

app.use("/api", mainApiRoute);

// app.get("/", (req, res) => {


  app.use(express.static(path.join(__dirname, "front-build")));
  app.get(`*`, (req, res) => {
    res.sendFile(path.join(__dirname, "front-build", "index.html"));
  });

// });

app.use(notFound);
app.use(errorHandler);

// db.then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
// }).catch((err) => {
  // console.log(err);
// });
