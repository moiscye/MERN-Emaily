const express = require("express");
require("./services/passport");
const app = express();

// const authRoutes = require("./routes/authRoutes")
// authRoutes(app);
//the below line is the same than the above 2 lines
require("./routes/authRoutes")(app);

//setting up the PORT to be used
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening in port ${PORT}`));
