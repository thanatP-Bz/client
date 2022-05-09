import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import express from "express";
const app = express();

//connect to DB
import connectDB from "./db/connectDB.js";

//routes
import authRouter from "./Routes/authRoutes.js";
import jobsRouter from "./Routes/jobRoutes.js";

//middleware
import {
  errorHandlerMiddleware,
  notFoundMiddleware,
} from "./middleware/index.js";

app.get("/", (req, res) => {
  res.send(`practice folder`);
});

//parse json
app.use(express.json());

//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

//middleware
app.use(errorHandlerMiddleware, notFoundMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server listening to port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
