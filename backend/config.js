import mongoose from "mongoose";

export const connectDB=async()=>{
   await mongoose.connect('mongodb+srv://biswasuttam0911:YdGjuIZeDzrzh9Zv@cluster0.rolkc2u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("Db connected"));
}

// mongodb+srv://biswasuttam0911:0911@cluster0.zb4xdlp.mongodb.net/food-del
