import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from "../context/StoreContext.jsx"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const PlaceOrder = () => {
  const navigate=useNavigate();
  const {getTotalCartAmount,token,fruitList,cartItems,url}=useContext(StoreContext);
  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    pincode:"",
    country:"",
    phone:""
  });
  const onchangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  const placeOrder=async(event)=>{
    event.preventDefault();
    let orderItems=[];
    fruitList.map((item)=>{
      if (cartItems[item._id]>0) {
        let itemInfo=item;
        itemInfo["quantity"]=cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
    let orderData={
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+50,
      
    }
    let response=await axios.post(url+"/order/place",orderData,{headers:{token}});
    if(response.data.success){
      const {session_url}=response.data;
      window.location.replace(session_url);
    }
  }
  useEffect(()=>{
    if(!token){
      navigate('/cart');
    }
    else if(getTotalCartAmount()===0){
      navigate('/');
    }
  },[token]);
  return (
    <form onSubmit={placeOrder} className='place-order flex flex-col sm:flex-row items-start justify-between gap-[50px] mt-24 px-5 sm:px-28 '>
      <div className="place-order-left w-full max-w-[500px]">
        <p className='title mb-12 text-3xl font-bold'>Delivery Information</p>
        <div className="multi-feilds flex gap-[10px] ">

          <input className='mb-4 p-[10px]  rounded border border-[#c5c5c5] w-full' required name='firstName' onChange={onchangeHandler} value={data.firstName} type="text" placeholder='First Name'/>

          <input className='mb-4 p-[10px] outline-primary rounded border border-[#c5c5c5] w-full' required name='lastName' onChange={onchangeHandler} value={data.lastName} type="text" placeholder='Last Name' />
        </div>

        <input className='mb-4 p-[10px] outline-primary rounded border border-[#c5c5c5] w-full' required name='email' onChange={onchangeHandler} value={data.email} type="email" placeholder='Email Address'/>

        <input className='mb-4 p-[10px] outline-primary rounded border border-[#c5c5c5] w-full' required name='street' onChange={onchangeHandler} value={data.street} type="text" placeholder='Street'/>

        <div className="multi-feilds flex gap-[10px]">
          <input className='mb-4 p-[10px] outline-primary rounded border border-[#c5c5c5] w-full'  required name='city' onChange={onchangeHandler} value={data.city} type="text" placeholder='City'/>

          <input className='mb-4 p-[10px] outline-primary rounded border border-[#c5c5c5] w-full' required name='state' onChange={onchangeHandler} value={data.state} type="text" placeholder='State' />

        </div>
        <div className="multi-feilds flex gap-[10px]">
          <input className='mb-4 p-[10px] outline-primary rounded border border-[#c5c5c5] w-full' required name='pincode' onChange={onchangeHandler} value={data.pincode} type="text" placeholder='Pin Code'/>
          <input className='mb-4 p-[10px] outline-primary rounded border border-[#c5c5c5] w-full' required name='country' onChange={onchangeHandler} value={data.country} type="text" placeholder='Country' />
        </div>
        <input className='mb-4 p-[10px] outline-primary rounded border border-[#c5c5c5] w-full' required name='phone' onChange={onchangeHandler} value={data.phone} type="text" placeholder='Phone'/>
      </div>
      <div className="place-order-right w-full max-w-[500px]">
      <div className="cart-total">
          <h2 className='text-2xl font-bold'>Cart Total</h2>
          <div>
            <div className="cart-total-details flex my-2 justify-between">
              <p>Subtotals</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details flex my-2 justify-between">
              <p>Delivery Charges</p>
              <p>₹{getTotalCartAmount()===0?0:50}</p>
            </div>
            <hr />
            <div className="cart-total-details flex my-2 justify-between">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+50}</b>
            </div>
          </div>
          <button type='submit' className='bg-primary rounded text-white mt-[30px] p-3'>Proceed To Payment</button>
        </div>

      </div>
      
    </form>
  )
}

export default PlaceOrder


