const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../model/userSchema");
router.get("/", (req, res) => {
  res.send("HELLO WORLD!.");
});

router.post("/register", async (req, res) => {
  const { name, email, password, cpassword, phone, work } = req.body;

  if (!name || !email || !password || !cpassword || !phone || !work) {
    return res.status(422).json({ error: "please enter value of all fields" });
  }

  try {
    const userExist = User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    }

    const user = new User({ name, email, password, cpassword, phone, work });

    const userRegister = await user.save();

    if (userRegister) {
      res.status(201).json({ message: "user registered successfuly." });
    } else {
      res.status(500).json({ error: "FAILED TO REGISTERED" });
    }
  } catch (error) {
    console.log(err);
  }
});

// USING PROMISES

// router.post("/register", (req, res) => {
//   const { name, email, password, cpassword, phone, work } = req.body;

//   if (!name || !email || !password || !cpassword || !phone || !work) {
//     return res.status(422).json({ error: "please enter value of all fields" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "email already exist" });
//       }

//       const user = new User({ name, email, password, cpassword, phone, work });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "user registered successfuly." });
//         })
//         .catch((err) =>
//           res.status(500).json({ error: "FAILED TO REGISTERED" })
//         );
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// LOGIN ROUTE

router.post("/signin", async (req, res) => {
  // console.log(req.body);
  // res.json({ message: "Heloo Word!" });

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "please filled the data!" });
    }

    const userLogin = await User.findOne({ email: email });
    console.log(userLogin);
    if (!userLogin) {
      res.json({ Error: "user error" });
    } else {
      res.json({ message: "user Sigin successfuly" });
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
