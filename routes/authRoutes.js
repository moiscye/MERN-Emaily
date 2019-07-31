const passport = require("passport");

module.exports = app => {
  app.get(
    //entry route to the google auth
    "/auth/google",
    //type of auth strategy used by passport
    //refers to GoogleStrategy defined above
    passport.authenticate("google", {
      //data that we request google to provide for us,
      //it could be any data even list of images in google drive
      scope: ["profile", "email"]
    })
  );

  app.get(
    //callback route that google will redirect  to
    "/auth/google/callback",
    passport.authenticate("google")
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    //req.session = null;
    res.send({ user: "logged out" });
  });

  app.get("/api/current_user", (req, res) => {
    console.log("in the current_user");
    res.send(req.user);
  });
};
