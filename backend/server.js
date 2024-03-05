import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();

app.use(express.json()); //to parse the incoming requests with json payloads (fro req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running in port ${PORT}`);
});
