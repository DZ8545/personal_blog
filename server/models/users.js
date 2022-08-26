const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  account: { type: String },
  password: { type: String },
});
module.exports = mongoose.model("Users", schema);
