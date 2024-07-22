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
  price: {
    type: Number,
    required: true,
  },
  desc_price: {
    type: Number,
  },
  image: {
    type: String,
    required: true,
  },
});

export const Course =
  mongoose.models.Course || mongoose.model("Course", courseSchema);
