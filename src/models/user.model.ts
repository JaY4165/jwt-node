import mongoose, { Schema } from "mongoose";
import { userType } from "../types/types";

const userSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<userType>("User", userSchema);

export default User;
