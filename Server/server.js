const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;

mongoose.connect("mongodb://localhost:27017/AutoLogin", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB connection successfull ...");
});
mongoose.connection.on("error", (err) => {
  console.log("MongoDB connection Error ...", err);
});

require("./models/user");
require("./models/webpass");

app.use(express.json());
app.use(require("./routes/auth"));

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
