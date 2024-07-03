import mongoose from "mongoose";

const serviceSchema = mongoose.Schema({
  place: {
    type: String,
    require: true,
  },
  destination: {
    type: String,
    require: true,
  },
  description: {
    tyoe: String,
    require: true,
  },
  prix: {
    type: Number,
    require: true,
  },
});

const service = mongoose.model("service", serviceSchema);
export default service;
