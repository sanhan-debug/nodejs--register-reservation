import { Router } from "express";
import { createUser, loginUser } from "../Controllers/userController.js";
import { authMiddleware } from "../Middlewares/authantication.js";
import { userModel } from "../Models/model.js";

export const userRouter = new Router()

userRouter.get('/api/user/:id/:token',authMiddleware,async(req,res)=>{
   try {
    const {_id} = req.user
    const user = await userModel.findById(_id)
    res.send(user).status(200)
   } catch (error) {
    console.error("user/id problem")
    res.staus(400).send('bad request')
   }
})

userRouter.post('/api/auth/register',createUser)

userRouter.post('/api/auth/login',loginUser)