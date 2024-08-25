import mongoose from 'mongoose';
const fruitSchema=mongoose.Schema({
 name:String,
 price:Number,
 image:String
})

// module.exports = mongoose.model('fruit',fruitSchema);
const fruitModel=mongoose.models.fruit || mongoose.model("fruit",fruitSchema);
export default fruitModel;
