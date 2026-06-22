const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    unique: true,
    required: true,
  },

  service: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  monthlySalary: {
    type: Number,
    required: true,
  },

  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number], 
      required: true,
    },
  },
});

workerSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Worker", workerSchema);