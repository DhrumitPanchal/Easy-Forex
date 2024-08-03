import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    default: "user",
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    types: String,
  },
});

export const Admin =
  mongoose?.models?.Admin || mongoose.model("Admin", adminSchema);
