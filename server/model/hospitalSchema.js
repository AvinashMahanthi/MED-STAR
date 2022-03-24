const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  hospitalName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
});

module.exports = new mongoose.model("Hospital", hospitalSchema);
