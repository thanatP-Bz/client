import User from "../model/auth.js";
import { BadRequestError } from "../error/index.js";
import { StatusCodes } from "http-status-codes";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("please provide all value");
  }

  const userAlreadyExist = await User.findOne({ email });
  if (userAlreadyExist) {
    throw new BadRequestError("this email has already in use");
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: { user: user.name, email: user.email, location: user.location },
    token,
  });
};

const login = async (req, res) => {
  res.send("login");
};

const updateUser = async (req, res) => {
  res.send("update user");
};

export { register, login, updateUser };
