const express = require("express");
const router = require("express").Router();
const mongoose = require("mongoose");
const Doctor = require("../model/doctorSchema").model;
// const keys = require("../keys");

const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const requireLogin = require("../middlewares/requireLogin");

router.get("/CreateDoctor", (req, res) => {
  res.send("This is Doctor signIn");
});

router.post("/CreateDoctor", (req, res) => {
  const {
    name,
    email,
    phone,
    specialization,
    hospital,
    experience,
    consultationFee,
    keywords,
    password,
  } = req.body;
  if (
    !name ||
    !email ||
    !phone ||
    !specialization ||
    !hospital ||
    !experience ||
    !consultationFee ||
    !keywords ||
    !password
  ) {
    return res.status(422).json({ error: "please add all the fields" });
  }
  // User.findOne({ email: email }).then((savedUser) => {
  // if (savedUser) {
  //   return res.json({ msg: "User already Exists!" });
  // }
  // bcrypt.hash(password, 10).then((hashedPassword) => {
  const registerDoctor = new Doctor({
    name,
    email,
    phone,
    specialization,
    hospital,
    experience,
    consultationFee,
    keywords,
    password,
  });
  registerDoctor
    .save()
    // .then((data) => {
    //    console.log(data);
    // })
    .catch((err) => {
      console.log(err);
    });
  res.json({ msg: "Login Information saved!" });
  // });
  // });
  // console.log(registerUser);
});

router.get("/GetDoctors", (req, res) => {
  Doctor.find()
    .populate("_id name specialization experience consultationFee")
    .then((doctors) => {
      res.json({ doctors });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/consult/:specialization", (req, res) => {
  Doctor.find({ specialization: req.params.specialization })
    .select("-password")
    .then((doctor) => {
      console.log(doctor);
      return res.json({ doctor });
    })
    .catch((err) => {
      console.log(err);
      return res.status(422).json({ error: "Doctors not found!" });
    });
});

module.exports = router;
