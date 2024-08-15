import express from "express";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";
import cors from "cors";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
const databaseURL = "mongodb://localhost:27017/CONTACTdb";
// Database connection
mongoose
  .connect(databaseURL, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Routes
app.use("/api", contactRoutes);

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
