const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const connectToDB = require("./db/connection");
const User = require("./model/userModel");
require("dotenv").config();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

connectToDB();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}`);
});

app.get("/", (req, res) => {
  res.send("This is MED-STAR");
});

// USER SIGNUP
app.post("/signup", (req, res) => {
  const {
    email,
    name,
    password,
    confirmPassword,
    aadharNumber,
    mobileNumber,
    address,
    city,
    state,
  } = req.body;
  if (!email || !password || !name || !confirmPassword) {
    return res.status(422).json({ error: "please add all the fields" });
  }
  if (password == confirmPassword) {
    User.findOne({ email: email }).then((savedUser) => {
      if (savedUser) {
        return res.json({ msg: "User already Exists!" });
      }
      bcrypt.hash(password, 10).then((hashedPassword) => {
        const registerUser = new User({
          email,
          name,
          password: hashedPassword,
          aadharNumber,
          mobileNumber,
          address,
          city,
          state,
        });
        registerUser
          .save()
          // .then((data) => {
          //    console.log(data);
          // })
          .catch((err) => {
            console.log(err);
          });
        res.json({ msg: "Login Information saved!" });
      });
    });
    // console.log(registerUser);
  } else {
    res.json({ msg: "Password and confirm password must be same!" });
  }
});

// USER SIGNIN

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "please add all the fields" });
  }
  console.log(req.body);
  const user = await User.findOne({ email });
  console.log(user);
  if (user) {
    bcrypt
      .compare(password, user.password)
      .then((doMatch) => {
        if (doMatch) {
          const token = jwt.sign({ _id: user._id }, JWT_SECRET);
          return res.json({ msg: "Logged in sucessfully!", token });
        } else {
          return res.status(422).json({ error: "Invalid Email or Password" });
        }
      })
      .catch((e) => {
        console.log(e);
        res.status(400).send(e);
      });
  }
});
