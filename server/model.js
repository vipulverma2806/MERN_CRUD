const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})
module.exports = mongoose.model("User",schema)