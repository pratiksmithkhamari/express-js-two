import  express  from "express";

import { getAllUser, getNewUser, getUserById } from "../handlers/user.js";

const router = express.Router()

//all user 
router.get("/all",getAllUser)

//new user 
router.post("/new",getNewUser)

//user by id
router.get("/new/:id",getUserById)
export default router