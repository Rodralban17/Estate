import dotenv from 'dotenv';
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import postRoute from "./routes/post.route.js"
import authRoute from "./routes/auth.route.js"
import userRoute from "./routes/user.route.js"
import testRoute from "./routes/test.route.js"
import chatRoute from "./routes/chat.route.js"
import messageRoute from "./routes/message.route.js"
dotenv.config()
const app = express()

app.use(cors({origin: "http://localhost:3000", credentials: true}))
app.use(express.json()) //allow our app to use json formating
app.use(cookieParser())

app.use("/api/posts", postRoute)
app.use("/api/users", userRoute)
app.use('/api/auth', authRoute)
app.use('/api/test', testRoute)
app.use('/api/chats', chatRoute)
app.use('/api/messages', messageRoute)

app.listen(8800, ()=>{
    console.log("Server is running!!") 
})