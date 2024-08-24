import express from 'express';
const cartRouter=express.Router();
import {addtoCart,removeFromCart,getCart}from '../controller/cart-controller.js';
import authMiddleware from '../middleware/auth.js';



cartRouter.post("/add",authMiddleware,addtoCart);
cartRouter.post("/remove",authMiddleware,removeFromCart);
cartRouter.post("/get",authMiddleware,getCart);

export default cartRouter;


