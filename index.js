const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoute = require('./routes/todoRoute.js')
dotenv.config();
app.use(cors());
app.use(express.json());
const connect = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

app.use("/api", todoRoute);

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
