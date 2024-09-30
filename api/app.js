import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import postRoute from "./routes/post.route.js"
import authRoute from "./routes/auth.route.js"
import userRoute from "./routes/user.route.js"
import testRoute from "./routes/test.route.js"

const app = express()

app.use(cors({origin: "http://localhost:3000", credentials: true}))
app.use(express.json()) //allow our app to use json formating
app.use(cookieParser())

app.use("/api/posts", postRoute)
app.use("/api/user", userRoute)
app.use('/api/auth', authRoute)
app.use('/api/test', testRoute)

app.listen(8800, ()=>{
    console.log("Server is running!!")
})