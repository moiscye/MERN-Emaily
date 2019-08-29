module.exports = (req, res, next) => {
  //checking if user is authenticated
  if (req.user.credits < 1) {
    return res
      .status(403)
      .send({ error: "User must have at least 1 credit to send surveys" });
  }
  next();
};
