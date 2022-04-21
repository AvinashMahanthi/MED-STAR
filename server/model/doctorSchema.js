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
  phone: {
    type: Number,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  // hospital: [{ type: ObjectId, ref: "Hospital" }],
  hospital: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  keywords: {
    type: Array,
    required: true,
  },
  consultationFee: {
    type: Number,
    required: true,
  },
});

var Doctor = mongoose.model("Doctor", doctorSchema);

module.exports.model = Doctor;
module.exports.Schema = doctorSchema;
