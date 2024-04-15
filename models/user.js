import  mongoose  from "mongoose"

const users = new mongoose.Schema({
    name:String,
    
     email:{
        type:String,
        unique:true,
        require:true,
     },
     password:{
        type:String,
        select:false,
        require:true,
     },
     createdAt:{
        type:Date,
        default:Date.now
     }
})

// mongoose.model()

export const Api = mongoose.model("api",users)
