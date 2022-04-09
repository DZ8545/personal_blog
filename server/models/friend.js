const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  headImg: { type: String },
  name: { type: String },
  description: { type: String },
  mail: { type: String },
  address: { type: String },
});
module.exports = mongoose.model("Friends", schema);
