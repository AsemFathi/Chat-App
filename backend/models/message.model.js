import messageSchema from "./message.mongo";
import mongoose from "mongoose";

const message = mongoose.model("Message", messageSchema);

export default message;