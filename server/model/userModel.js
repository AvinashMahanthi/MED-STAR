const mongoose = require("mongoose");
const { roles } = require("../utils/constants");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // aadharNumber: {
  //   type: Number,
  //   required: true,
  // },
  phone: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: [roles.admin, roles.doctor, roles.user],
    default: roles.user,
  },
});

module.exports = new mongoose.model("User", userSchema);
