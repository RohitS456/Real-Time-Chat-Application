import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from 'cors';
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import mongodbCoonection from "./database/Mongodb.js";

import { app,server } from "./socket/socket.js";
const __dirname=path.resolve();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

const port = process.env.PORT || 5000;
 
app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})


server.listen(port, () => {
    mongodbCoonection();
    console.log(`Server is running on port ${port}`);
});