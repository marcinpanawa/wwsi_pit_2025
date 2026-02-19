const mongoose = require("mongoose");

const TipSchema = new mongoose.Schema({
  url: { type: String, required: true },
  message: { type: String, required: true, maxlength: 500 },
  email: { type: String },

  status: {
    type: String,
    enum: ["new", "processed", "rejected"],
    default: "new"
  }
}, { timestamps: true });

module.exports = mongoose.model("Tip", TipSchema);