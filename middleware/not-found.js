const notFoundMiddleware = (req, res) => {
  res.status(400).send("page not found");
};

export default notFoundMiddleware;
