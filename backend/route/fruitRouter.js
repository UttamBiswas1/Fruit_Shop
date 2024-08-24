import express from 'express';
const fruitRouter=express.Router();
import {addFruit, fruitList} from "../controller/fruit-controller.js"
import multer from 'multer';



fruitRouter.get('/',(req,res)=>{
  res.send("its working");
})


//image storage engine
const storage =multer.diskStorage({
  destination:"uploads",
  filename:(req,file,cb)=>{
    return cb(null,`${Date.now()}${file.originalname}`)
  }
})

const upload=multer({storage:storage});


fruitRouter.post("/add",upload.single("image"),addFruit);
fruitRouter.get("/list",fruitList)

export default fruitRouter;