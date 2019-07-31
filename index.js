const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passsport = require("passport");
const keys = require("./config/keys");
require("./model/User");
require("./services/passport");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
const app = express();

//this code will make the cookie session for a given time with the given keys
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

//letting passort know to use cookie session
app.use(passsport.initialize());
app.use(passsport.session());

// const authRoutes = require("./routes/authRoutes")
// authRoutes(app);
//the below line is the same than the above 2 lines
require("./routes/authRoutes")(app);

//setting up the PORT to be used
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening in port ${PORT}`));
