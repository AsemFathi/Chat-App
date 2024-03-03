import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js"
import express from "express";
import dotenv from "dotenv";

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();

app.use(express.json()); //to parse the incoming requests with json payloads (fro req.body)
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running in port ${PORT}`);
});
