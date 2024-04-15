const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PresaleSchema = new Schema(
  {
    stage: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    sell: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("presales", PresaleSchema);
