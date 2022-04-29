const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;
const connectToDB = require("./db/connection");
const User = require("./model/userModel");
require("dotenv").config();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

connectToDB();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Server Listening on Port ${port}`);
});

app.use("/", require("./routes/index.route"));
app.use("/doc", require("./routes/doc.route"));
app.use("/auth", require("./routes/auth.route"));
app.use("/appoint", require("./routes/appointment.route"));
