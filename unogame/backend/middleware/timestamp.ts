const requestTime = (req, res, next) => {
  console.log(`Request received at ${Date.now()}: ${req.method}`);

  next();
};

export { requestTime };
