const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({ path: "./config.env" });
require("./db/conn");

app.use(express.json());

app.use(require("./router/auth"));
// const User = require("./model/userSchema");

const middleware = (req, res, next) => {
  console.log("HELLO I AM HOSHIYAR.");
  next();
};

app.get("/about", middleware, (req, res) => {
  res.send("HELLO WORLD FROM SOURABH.");
});

app.listen(3000, () => {
  console.log("SERVER IS RUNNING ON PORT 3000");
});
