const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("Doctor", doctorSchema);
