import { Api } from "../models/user.js"

export const getAllUser =  async (req,res)=>{

    const users = await Api.find({})

    res.json({
        success:true,  
        users
    })
}


export const getNewUser = async (req,res)=>{

    const {name,email,password} = req.body
    
         await Api.create({
            name,email,password
         })
    
        res.status(201).json({
            success:true,
            message:"successful"
        })
    }


    export const getUserById = async (req,res)=>{
         
        const {id} = req.params
      const user =  await Api.findById(id)

            res.json({
                success:true,
                message:"successful",
                user
            })
        }