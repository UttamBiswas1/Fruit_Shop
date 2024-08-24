import userModel from '../models/user-model.js';
import validator  from 'validator';
import bcrypt  from 'bcrypt';
import jwt from 'jsonwebtoken';

const createToken=(id)=>{
  return jwt.sign({id},process.env.JWT_SECRET)
}

const registerUser=async (req,res)=>{
  const {name,password,email}=req.body;
  try{
    //checking is user already exists
    const exists=await userModel.findOne({email});
    if(exists){
      return res.json({success:false,message:"User already exists"})
    }
    // validate email format and strong password
    if(!validator.isEmail(email)){
      return res.json({success:false,message:"Please enter a valid email"})
    }

    if(password.length<8){
      return res.json({success:false,message:"Please enter a strong password"})
    }
    //hasing user passwword
    const salt=await bcrypt.genSalt(10)
    const hasedPassword=await bcrypt.hash(password,salt);
    
    const newUser=new userModel({
      name:name,
      email:email,
      password:hasedPassword
    });
    
    const user=await newUser.save();
    const token =createToken(user._id)
    res.json({success:true,token})

  }catch(error){
    console.log(error);
    res.json({success:false,message:"Error"})
  }
  
};


const loginUser=async (req,res)=>{
  const {email,password}=req.body;
  try {
    const user=await userModel.findOne({email})
    if(!user){
      return res.json({success:false,message:"user dosen't exists"})
    }
    const isMatch=await bcrypt.compare(password,user.password)

    if(!isMatch){
      return res.json({success:false,message:"Invalid credentials"})
    }

    const token =createToken(user._id);
    res.json({success:true,token});
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
  }
}

export {registerUser,loginUser};