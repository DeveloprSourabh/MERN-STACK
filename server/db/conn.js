const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("CONNECTION IS SUCCESSFULLY");
  })
  .catch((ERR) => console.log(ERR));
