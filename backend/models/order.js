const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    kolhydrat: {
      type: String,
      required: true
    },
    protein: {
      type: String,
      required: true
    },
    tillbehör1: {
      type: String,
      required: true
    },
    tillbehör2: {
      type: String,
      required: true
    },
    tillbehör3: {
      type: String,
      required: true
    },
    tillbehör4: {
      type: String,
      required: true
    },
    dressing1: {
      type: String,
      required: true
    },
    dressing2: {
      type: String,
      required: false
    },
    timeOfOrder: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Order = (module.exports = mongoose.model("Order", OrderSchema));
