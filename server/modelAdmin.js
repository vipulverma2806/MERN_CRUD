const mongoose = require("mongoose");
const modelAdmin = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
module.exports = mongoose.model("Admin", modelAdmin);
