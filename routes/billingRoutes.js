const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middleware/requireLogin");

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    //checking if user is authenticated
    //not recommended here, instead we create a middleware
    // and we add it to the head of the expresion like above
    // if (!req.user) {
    //   return res.status(401).send({ error: "must log in " });
    // }
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "aud",
      source: req.body.id, // obtained with Stripe.js
      description: "Charge for emaily"
    });

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
