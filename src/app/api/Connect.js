import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const Connect = async () => {
  const DB_URL = process.env.NEXT_PUBLIC_DB_URL;
  try {
    mongoose.connect(DB_URL);
    console.log("mongoDB connected");
  } catch (error) {
    console.log("DB connection error : " + error);
  }
};
