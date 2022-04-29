const express = require("express");
const router = require("express").Router();
const mongoose = require("mongoose");
const Appointment = require("../model/appointmentSchema").model;

router.post("/bookAppointment", (req, res) => {
  const { name, phone, specialization, doctorName, fee, address, upi } =
    req.body;
  const appointment = new Appointment({
    name,
    phone,
    specialization,
    doctorName,
    fee,
    address,
    upi,
  });
  appointment
    .save()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  res.json({ msg: "Your Information saved!" });
});

module.exports = router;
