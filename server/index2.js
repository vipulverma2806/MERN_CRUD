const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const modelAdmin = require("./modelAdmin");
const admin = express();
admin.use(express.json());
admin.use(cors());

mongoose
  .connect("mongodb://localhost:27017/vipulAdmin")
  .then(() => {
    console.log("connected to admin");
  })
  .catch((err) => {
    console.log(err);
  });

admin.post("/register", (req, res) => {
  const data = req.body;
  modelAdmin
    .create(data)
    .then((result) => {
      console.log("Successfully created");
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

admin.post("/login", (req, res) => {
  const data = req.body;
  console.log(data)
  modelAdmin
    .findOne(data)
    .then((result) => {
      if (result) {
        console.log("Successfully found"+ result);
        res.json("success");
      }else{
        console.log("Not found"+ result);
        res.json("invalid credintials");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

admin.listen("2000");
