const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({
    name: "First Name",
    phone: "1234566789",
    lastName: "Second Name"
  });
});

app.listen(PORT, () => console.log(`listening in port ${PORT}`));
