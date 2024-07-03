import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
  place: {
    type: String,
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
});

const service = mongoose.model("service", serviceSchema);
export default service;
