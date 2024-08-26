import mongoose from 'mongoose';
const userSchema=mongoose.Schema({
  name:{
    type:String,
    minLength:3,
    trim:true
  },
  email:String,
  password:String,
  cartData:{type:Object,default:{}}
},{minimize:false});

const userModel=mongoose.models.user || mongoose.model("user",userSchema);
export default userModel;
