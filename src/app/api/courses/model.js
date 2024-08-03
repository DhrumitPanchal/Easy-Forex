import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  isMembership: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  desc_price: {
    type: Number,
  },
  image: {
    type: String,
    required: true,
  },
  membership: [
    {
      months: { type: Number },
      price: { type: Number },
      desc_price: { type: Number },
    },
  ],
  benefits: [
    {
      type: String,
    },
  ],
});

export const Course =
  mongoose.models.Course || mongoose.model("Course", courseSchema);
