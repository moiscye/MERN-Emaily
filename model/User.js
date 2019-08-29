const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: String,
  credits: {
    type: Number,
    default: 0
  },
  email: String,
  password: String
});

mongoose.model("users", userSchema);
