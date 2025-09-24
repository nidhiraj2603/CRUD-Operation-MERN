const express = require("express");

const app = express();

const port = 2620;

const connectDB = require("./config/mongoose");

//DATABASE CONNECTION
connectDB();
// TO PUT AlL ENTERED VALUES IN BODY KEY
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.json({
    message: "Hello! Server is running 🚀, done by nidhi raj",
    status: "success",
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Firing up the express server on: ", port);
});
