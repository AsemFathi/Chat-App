import conversationSchema from "./conversation.mongo.js";
import mongoose from "mongoose";

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;