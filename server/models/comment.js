const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  article: { type: mongoose.Schema.Types.ObjectId, ref: "Article" },
  name: { type: String },
  remark: { type: String },
  recipient: { type: String }, //接受者
  headImg: { type: String },
  time: { type: String },
  mail: { type: String },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  // parent: { type: String },
});
module.exports = mongoose.model("Comment", schema);
