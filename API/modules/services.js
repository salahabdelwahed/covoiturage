import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
  place: {
    type: Number,
    require: true,
  },
  prix: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  destination: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  }
});

const service = mongoose.model("service", serviceSchema);
export default service;
