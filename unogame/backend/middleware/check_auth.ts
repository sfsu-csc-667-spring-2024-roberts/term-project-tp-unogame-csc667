const isAuthenticated = (req, res, next) => {
  if (req.session.user !== undefined) {
    next();
  } else {
    res.redirect("/"); // or /login, to be decided later
  }
};

export { isAuthenticated };
