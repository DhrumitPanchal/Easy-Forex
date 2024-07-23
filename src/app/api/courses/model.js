import mongoose, { Types } from "mongoose";

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
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
