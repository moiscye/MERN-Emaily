module.exports = (req, res, next) => {
  //checking if user is authenticated
  if (!req.user) {
    return res.status(401).send({ error: "User must log in " });
  }
  next();
};
