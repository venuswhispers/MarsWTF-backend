const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HoldersSchema = new Schema(
  {
    amount: {
      type: String,
      required: true,
    },
    original_amount: {
      type: String,
      required: true,
    },
    usd_value: {
      type: String,
      required: true,
    },
    wallet_address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('holders', HoldersSchema);
