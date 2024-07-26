import mongoose from "mongoose";

const planSchema = new mongoose.Schema({
  months: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  benefits: [{ type: String }],
});

export const Plan = mongoose.models.Plan || mongoose.model("Plan", planSchema);
