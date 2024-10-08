import express from 'express';
const app=express();
import path from 'path';
import cookieParser from 'cookie-parser';
import "dotenv/config.js"
import cors  from "cors";
import userRouter from './route/userRouter.js'
import fruitRouter from './route/fruitRouter.js'
import cartRouter from './route/cartRouter.js'
import orderRouter from './route/orderRouter.js';
import { connectDB } from "./config/config.js";


app.use(express.json());
app.use(cookieParser());
app.use("/images",express.static('uploads'));
app.use(cors());
connectDB();
const port=process.env.PORT || 3000;

app.get('/',(req,res)=>{
  res.send("hello");
  
});



app.use("/user",userRouter);
app.use("/fruit",fruitRouter);
app.use("/cart",cartRouter);
app.use("/order",orderRouter)



app.listen(port);
