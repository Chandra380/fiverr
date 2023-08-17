import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"
import cors from "cors"

const app = express()
dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use((err, req, res, next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).send(errorMessage);
})
app.use(cors({origin:"http://localhost:5173", credentials: true}))

mongoose.connect(process.env.MONGO_URL)
const db = mongoose.connection;
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
db.once('open', () => {
  console.log('Connected to MongoDB database');
})

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)

app.listen(8800, ()=>{
    console.log("server running at 8800")
})