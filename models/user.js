import  mongoose  from "mongoose"

const users = new mongoose.Schema({
    name:String,
     email:String,
     password:String
})

// mongoose.model()

export const Api = mongoose.model("api",users)
