import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
    unique: true,
  },
  lastName: {
    type: String,
    minlength: 6,
    maxlength: 20,
    trim: true,
    default: "last name",
  },
  location: {
    type: String,
    minlength: 6,
    maxlength: 20,
    trim: true,
    default: "location",
  },
});

export default mongoose.model("User", UserSchema);
