import messageSchema from "./message.mongo.js";
import mongoose from "mongoose";

const Message = mongoose.model("Message", messageSchema);

export default Message;