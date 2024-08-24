import mongoose from 'mongoose';
mongoose.connect('mongodb://0.0.0.0/Fruit-Store');
const fruitSchema=mongoose.Schema({
 name:String,
 price:Number,
 image:String
})

// module.exports = mongoose.model('fruit',fruitSchema);
const fruitModel=mongoose.models.fruit || mongoose.model("fruit",fruitSchema);
export default fruitModel;
