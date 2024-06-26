
import jwt from "jsonwebtoken"

export const sendCookie = (user,res,message,statusCode=201)=>{
    const token = jwt.sign({_id:user._id},process.env.SECRET_JWT)
    
    res.status(statusCode).cookie("token",token,{
        httpOnly:true,
        maxAge: 15 * 60 * 1000
    }).json({
        success:true,
        message
    })

}