const errorHandlerMiddleware = (req, res) => {
  res.status(500).send("something went wrong");
};

export default errorHandlerMiddleware;
