const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./model/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
const app = express();

// const authRoutes = require("./routes/authRoutes")
// authRoutes(app);
//the below line is the same than the above 2 lines
require("./routes/authRoutes")(app);

//setting up the PORT to be used
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening in port ${PORT}`));
