const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
  id: String,
  category: String,
  name: String
});

const MenuItem = (module.exports = mongoose.model("MenuItem", MenuItemSchema));
