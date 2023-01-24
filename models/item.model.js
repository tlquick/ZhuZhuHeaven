const mongoose = require("mongoose");

const User = mongoose.model(
  "Item",
  new mongoose.Schema({
    id: Number,
    series: Number,
    name: String,
    desc: String,
    price: Number,
    image: String,
  })
);

module.exports = User;
