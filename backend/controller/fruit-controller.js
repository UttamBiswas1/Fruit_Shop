import fruitModel from '../models/fruits-model.js';

const addFruit=async (req,res)=>{
  let image_filename=`${req.file.filename}`;
  const fruit=new fruitModel({
    name:req.body.name,
    price:req.body.price,
    image:image_filename,
  })
  try{
    await fruit.save();
    res.json({success:true,message:"Fruit Added"})
  }
  catch(error){
    console.log(error);
    res.json({success:false,message:"error"})
  }
};

const fruitList=async (req,res)=>{
  try {
    const fruits=await fruitModel.find({});
    res.json({success:true,data:fruits})
  } catch (error) {
    console.log("error");
    res.json({success:false,message:"error"})
  }
}

export  {fruitList,addFruit};