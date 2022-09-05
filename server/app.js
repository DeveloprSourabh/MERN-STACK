const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO WORLD FROM SOURABH.");
});

app.listen(3000, () => {
  console.log("SERVER IS RUNNING ON PORT 3000");
});
