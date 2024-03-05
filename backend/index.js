const express = require("express");
var cors = require("cors");

const mainApiRoute = require("./routes/index");
require("dotenv").config();
const db = require("./database/config");
const { notFound, errorHandler } = require("./utils/errorHandler");

const app = express();
const { PORT = 3000 } = process.env;

app.use(cors());
app.use(express.json());

app.use("/api", mainApiRoute);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(notFound);
app.use(errorHandler);

db.then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.log(err);
});