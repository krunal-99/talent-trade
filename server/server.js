import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to MongoDB");
  } catch {
    console.error("Error connecting to the database");
  }
};

app.listen(6000, () => {
  connectDB();
  console.log("Server is running at port 6000");
});
