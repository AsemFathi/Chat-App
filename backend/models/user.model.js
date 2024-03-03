import userSchema from "./user.mongo.js";
import mongoose from "mongoose";


const User = mongoose.model("User", userSchema);

export default User;