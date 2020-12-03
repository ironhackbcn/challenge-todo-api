// Model of Todo modified (added creator to it).

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Todo = new Schema(
  {
    creator: {
      type: String,
    },
    title: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", Todo);
