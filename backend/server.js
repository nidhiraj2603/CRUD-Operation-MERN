const express = require("express");

const app = express();

const port = 2620;

const connectDB = require("./config/mongoose");

const cors = require("cors");

//DATABASE CONNECTION
connectDB();
// CORS MIDDLEWARE
app.use(cors());

// IT WILL PARSE .body
app.use(express.json());

// TO PUT AlL ENTERED VALUES IN BODY KEY
app.use(express.urlencoded({ extended: true }));

//ENTRY POINT
app.use("/", require("./routes/index"));

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Firing up the express server on: ", port);
});
