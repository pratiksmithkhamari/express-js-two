import { Api } from "../models/user.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import { sendCookie } from "../utils/feature.js"

export const getAllUser =  async (req,res)=>{

   
}
//login user
export const login = async (req,res,next)=>{
  const {name,email,password} = req.body
  if (!password) {
    return res.status(400).json({
        message: "Password is required",
        success: false
    });
}
  let user =  Api.findOne({email}).select('+password')

  if(!user)
     return res.status(404).json({
      message:"user not found please register",
      success:false
    })

    const isMatched = await bcrypt.compare(password,user.password)

    if(!isMatched)
     return res.status(404).json({
      message:"user not found please register",
      success:false
    })
    sendCookie(user,`Welcome back, ${user.name}`,200)
}


//register user
export const registerUser = async (req,res)=>{

    const {name,email,password} = req.body

    let user = await Api.findOne({email})

    if(user) return res.status(404).json({
      message:"user already exist",
      success:false
    })

    const hashedPass =await bcrypt.hash(password,10)
  user =  await Api.create({name,email,
    password:hashedPass,
    })

   sendCookie(user,res,"registered successfully",201)
 }


    export const getUserById = async (req,res)=>{
         
        
        } 