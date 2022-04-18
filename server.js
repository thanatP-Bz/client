import express from "express";
const app = express();

//middleware
import {
  errorHandlerMiddleware,
  notFoundMiddleware,
} from "./middleware/index.js";

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use(errorHandlerMiddleware, notFoundMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});
