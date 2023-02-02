const mongoose = require("mongoose");

const dataSchma = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: "Unkonwn Author",
  },
  content: {
    type: String,
    default: "Nothing here!",
  },
});

module.exports = mongoose.model("Article", dataSchma);
