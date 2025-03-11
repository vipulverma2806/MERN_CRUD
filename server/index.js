const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const User = require("./model.js");
const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/CRUD")
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/post", (req, res) => {
  console.log(req.body);
  User.create({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  })
    .then((result) => {
      console.log("success");
      return res.json(result);
    })
    .catch((err) => {
      console.log(err);
      return res.json(err);
    });
});

app.put("/update/:id", (req, res) => {
  console.log(req.body);
  const id = req.params;
  console.log(id);
  User.findByIdAndUpdate(id.id, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
  })
    .then((result) => {
      console.log("success");
      return res.json(result);
    })
    .catch((err) => {
      console.log(err);
      return res.json(err);
    });
});

app.delete("/delete/:id", (req, res) => {
  console.log(req.body);
  const id = req.params;
  console.log(id);
  User.findByIdAndDelete(id.id)
    .then((result) => {
      console.log("success");
      return res.json(result);
    })
    .catch((err) => {
      console.log(err);
      return res.json(err);
    });
});

app.get("/get", (req, res) => {
  console.log(req.body);
  User.find()
    .then((result) => {
      console.log("success");
      return res.json(result);
    })
    .catch((err) => {
      console.log(err);
      return res.json(err);
    });
});

app.listen("8000");
