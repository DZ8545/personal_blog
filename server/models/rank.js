const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: { type: String },
  remarks: { type: String },
  gameName: { type: Number }, //贪吃蛇是1
  score: { type: Number },
});
module.exports = mongoose.model("Rank", schema);
