const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://akashmistryofficial:03260220@cluster0.gbe5rca.mongodb.net",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Successfully connected to the DataBase 🥞");
  } catch (err) {
    console.log("Error Connecting to the Database", err);
  }
};

module.exports = connectDB;
