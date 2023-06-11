const express = require("express");
const port = 8000;
const mongoose = require("mongoose");

// Connect to MongoDB
const db = require("./config/mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());

// Routes
app.use("/products", productRoutes);

// Start the server
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server ${port}`);
  }
  console.log("Server is running on port 8000");
});
