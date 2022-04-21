const express = require("express");
const router = require("express").Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const keys = require("../keys");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/signup", (req, res) => {
  res.send("This is auth signUp");
});

router.get("/signin", (req, res) => {
  res.send("This is auth signIn");
});

// USER SIGNUP
router.post("/signup", (req, res) => {
  const { name, email, phone, gender, pincode, state, password } = req.body;
  if (!name || !email || !phone || !gender || !pincode || !state || !password) {
    return res.status(422).json({ error: "please add all the fields" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (savedUser) {
      return res.json({ msg: "User already Exists!" });
    }
    bcrypt.hash(password, 10).then((hashedPassword) => {
      const registerUser = new User({
        email,
        name,
        password: hashedPassword,
        pincode,
        phone,
        gender,
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
});

// USER SIGNIN
router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "please add email or password" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid Email or password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          const token = jwt.sign({ _id: savedUser._id }, keys.JWT_SECRET);
          const { _id, email, name, pincode, phone, gender, state, role } =
            savedUser;
          res.json({
            token,
            user: { _id, name, email, phone, gender, pincode, state, role },
          });
        } else {
          return res.status(422).json({ error: "Invalid Email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

// router.get("/CreateDoctor", (req, res) => {
//   res.send("This is auth signIn");
// });

// router.post("/CreateDoctor", (req, res) => {
//   const {
//     name,
//     email,
//     phone,
//     specialization,
//     hospital,
//     experience,
//     consultationFee,
//     keywords,
//     password,
//   } = req.body;
//   if (
//     !name ||
//     !email ||
//     !phone ||
//     !specialization ||
//     !hospital ||
//     !experience ||
//     !consultationFee ||
//     !keywords ||
//     !password
//   ) {
//     return res.status(422).json({ error: "please add all the fields" });
//   }
//   User.findOne({ email: email }).then((savedUser) => {
//     // if (savedUser) {
//     //   return res.json({ msg: "User already Exists!" });
//     // }
//     bcrypt.hash(password, 10).then((hashedPassword) => {
//       const registerDoctor = new Doctor({
//         name,
//         email,
//         phone,
//         specialization,
//         hospital,
//         experience,
//         consultationFee,
//         keywords,
//         password,
//       });
//       registerDoctor
//         .save()
//         // .then((data) => {
//         //    console.log(data);
//         // })
//         .catch((err) => {
//           console.log(err);
//         });
//       res.json({ msg: "Login Information saved!" });
//     });
//   });
//   // console.log(registerUser);
// });

module.exports = router;
