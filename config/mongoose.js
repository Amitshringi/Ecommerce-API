const mongoose = require("mongoose");

// Connect to MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
const db = mongoose.connection;

// Event listener for connection errors
db.on("error", console.error.bind(console, "Error Connecting to mongoDB"));

// Event listener for successful connection
db.once("open", function () {
  console.log("connected to Database :: Mongodb");
});

module.exports = db;
