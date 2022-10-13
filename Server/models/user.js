const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

mongoose.model("User", userSchema);
