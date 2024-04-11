import express from "express"
import userRouter from "./routers/Route.js"
import { config } from "dotenv";



export const app = express()

config({
    path:"./data/config.env"
})
//use of middleware

app.use(express.json())
app.use("/user/",userRouter)



app.get("/",(req,res)=>{
    res.send("hello 4000 server")
})

