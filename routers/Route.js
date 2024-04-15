import  express  from "express";

import { getAllUser, getUserById, login, registerUser } from "../handlers/user.js";

const router = express.Router()

//all user 
router.get("/all",getAllUser)


// login 
router.post("/login",login)



// register user 
router.post("/register",registerUser)


//user by id
router.route("/new/:id").get(getUserById)
export default router