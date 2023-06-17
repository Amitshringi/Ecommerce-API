const mongoose = require("mongoose");
// const { MongoClient, ServerApiVersion } = require('mongodb');
// Connect to MongoDB database
mongoose.connect("mongodb+srv://amitshringi0786:h7FPQeS7HZO1D5wQ@amit-shringi.kijdxfg.mongodb.net/?retryWrites=true&w=majority");
const db = mongoose.connection;

// Event listener for connection errors
db.on("error", console.error.bind(console, "Error Connecting to mongoDB"));

// Event listener for successful connection
db.once("open", function () {
  console.log("connected to Database :: Mongodb");
});

module.exports = db;
