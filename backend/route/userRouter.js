import express from 'express';
const userRouter=express.Router();
import {registerUser,loginUser} from '../controller/user-controller.js'

userRouter.get('/',(req,res)=>{
  res.send("its working");
})
userRouter.post("/login",loginUser)

userRouter.post('/register',registerUser);

export default userRouter;

