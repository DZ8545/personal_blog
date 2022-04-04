const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  kind: { type: String },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  time: { type: Number },
  NumberOfVisitors: { type: Number, default: 0 }, //浏览人数
  body: { type: String },
});
module.exports = mongoose.model("Article", schema);
