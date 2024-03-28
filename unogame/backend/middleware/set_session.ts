const setLocalSession = (req, res, next) => {
  res.locals.user = req.session.user;

  next();
};

export { setLocalSession };
