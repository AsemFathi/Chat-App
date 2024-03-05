import conversationSchema from "./conversation.mongo";
import mongoose from "mongoose";

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;