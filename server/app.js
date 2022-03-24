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

app.use("/", require("./routes/index.route"));
app.use("/auth", require("./routes/auth.route"));
