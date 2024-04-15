import  mongoose  from "mongoose"

const users = new mongoose.Schema({
    
    title:{
        type:String,
        required:true, 
    },
    description:{
        type:String,
        required:true
    },
    isComplete:{
        type:Boolean,
        default:false,
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"Api",
        required:true
    }
     
     
})

// mongoose.model()

export const Task = mongoose.model("Task",users)
