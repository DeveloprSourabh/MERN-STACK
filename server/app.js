const mongoose = require("mongoose");
const express = require("express");
const app = express();

const DB =
  "mongodb+srv://developrsourabh:saurabhlandergr@cluster0.x0nlpqg.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("CONNECTION IS SUCCESSFULLY");
  })
  .catch((ERR) => console.log(ERR));

const middleware = (req, res, next) => {
  console.log("HELLO I AM HOSHIYAR.");
  next();
};
// middleware();
app.get("/", middleware, (req, res) => {
  res.send("HELLO WORLD FROM SOURABH.");
});

app.listen(3000, () => {
  console.log("SERVER IS RUNNING ON PORT 3000");
});
