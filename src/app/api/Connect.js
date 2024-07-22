import mongoose from "mongoose";

export const Connect = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/easy-forex");
    console.log("mongoDB connected");
  } catch (error) {
    console.log("DB connection error : " + error);
  }
};
