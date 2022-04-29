const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  specialist: {
    type: String,
    // required: true,
  },
  address: {
    type: String,
    required: true,
  },
  upi: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    default: 350,
  },
});

var Appointment = new mongoose.model("Appointment", appointmentSchema);
module.exports.model = Appointment;
module.exports.Schema = appointmentSchema;
