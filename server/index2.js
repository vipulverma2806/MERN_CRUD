const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const modelAdmin = require("./modelAdmin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const admin = express();
admin.use(express.json());
admin.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

mongoose
  .connect("mongodb://localhost:27017/vipulAdmin")
  .then(() => {
    console.log("connected to admin");
  })
  .catch((err) => {
    console.log(err);
  });

admin.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10).then((hash) => {
    modelAdmin
      .create({ name, email, password: hash })
      .then((result) => {
        console.log("Successfully created");
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

admin.post("/login", (req, res) => {
  const { email, password } = req.body;

  modelAdmin
    .findOne({ email: email })
    .then((data) => {
      if (data) {
        bcrypt.compare(password, data.password, (err, result) => {
          if (result) {
            console.log("Successfully found " + result);

            const token = jwt.sign({ email: email }, "vipul-key", {
              expiresIn: "1d",
            });
            res.cookie("token", token);
            res.json("success");
          } else {
            res.json("Invalid Password");
          }
        });
      } else {
        console.log("Not found");
        res.json("invalid credintials");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

admin.listen("2000");
