const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");
const Web = mongoose.model("Web");
const router = express.Router();

router.post("/signup", (req, res) => {
  console.log("working");
  const { name, username, password } = req.body;
  if (!username || !password || !name) {
    return res.status(422).json({ error: "please add all fields" }); //remeber in js we can only use js objects, the res.json() method
    //converts js object to json. we cant directly write json in .js file as for json we need .json extension
  }
  User.findOne({ username: username })
    .then((saved) => {
      if (saved) {
        return res.status(422).json({ error: "already exsits" });
      }
      bcrypt.hash(password, 12).then((hashedpass) => {
        const user = new User({
          username,
          password: hashedpass,
          name,
        });
        user
          .save()
          .then((user) => {
            res.json({ message: "saved successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((e) => {
      console.log(e);
    });
});
router.post("/signin", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(422).json({ error: "enter all details" });
  }
  User.findOne({ username: username })
    .then((savedUser) => {
      if (!savedUser) {
        return res.status(422).json({ error: "invalid credentials" });
      }
      bcrypt
        .compare(password, savedUser.password)
        .then((match) => {
          if (match) {
            const token = jwt.sign({ _id: savedUser._id }, "eewoteggsa");
            const { _id, name, username } = savedUser;
            // let obj;
            // Web.findById(savedUser._id)
            // .then((details)=> {
            //     obj={
            //         iusername:details.iusername,
            //         ipassword:details.ipassword,

            //         fusername:details.iusername,
            //         fpassword:details.ipassword,

            //         wusername:details.iusername,
            //         wpassword:details.ipassword,

            //         ausername:details.iusername,
            //         apassword:details.ipassword,

            //         nusername:details.iusername,
            //         npassword:details.ipassword,

            //         lusername:details.iusername,
            //         lpassword:details.ipassword,

            //         cusername:details.iusername,
            //         cpassword:details.ipassword,

            //         rusername:details.iusername,
            //         rpassword:details.ipassword,
            //     }
            // })
            res.json({ token, user: { _id, name, username } });
          } else res.status(422).json({ error: "invalid credentials" });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
