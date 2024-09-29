import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import reviewRoute from "./routes/review.route.js";
import orderRoute from "./routes/order.route.js";
import messageRoute from "./routes/message.route.js";
import gigRoute from "./routes/gig.route.js";
import conversationRoute from "./routes/conversation.route.js";

const app = express();
dotenv.config();
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to MongoDB");
  } catch {
    console.error("Error connecting to the database");
  }
};

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.listen(6000, () => {
  connectDB();
  console.log("Server is running at port 6000");
});
