import React from "react";
import { useContext, useEffect, useState } from 'react'
// import "./MyOrders.css"
import { StoreContext } from '../context/StoreContext.jsx';
import axios from 'axios';
import parcel_icon from '../assets/parcel_icon.png'

const MyOrders = () => {
  const {url,token}=useContext(StoreContext);
  const [data,setData]=useState([]);

  const fetchOrders=async()=>{
    const response=await axios.post(url+"/order/userorders",{},{headers:{token}});
    setData(response.data.data);
  }

  useEffect(()=>{
    if (token) {
     fetchOrders(); 
    }
  },[token]);

  return (
    <div className="sm:p-24 p-0 mt-10">
    <div className='mx-12'>
      <h2 className="md:text-3xl text-xl font-bold">My Orders</h2>
      <div className="flex flex-col gap-5 mt-7">
        {data.map((order,index)=>{
          return( 
          <div  key={index} className="my-orders-order grid grid-cols-3 md:grid-cols-6 md:text-base text-xs  content-center gap-7 border border-red-600 px-2 py-3 gap-y-1 sm:gap-y-0">
             <img src={parcel_icon} alt="" className="w-12 "/>
             <p>{order.items.map((item,index)=>{
                if(index===order.items.length-1){
                  return item.name+"x"+item.quantity;
                }else{
                  return item.name+"x"+item.quantity+", ";
                }
             })}</p>
             <p>₹{order.amount}.00</p>
             <p>Items: {order.items.length}</p>
             <p><span className="text-primary">&#x25cf;</span><b>{order.status}</b></p>
             <button className="bg-[#ffe1e1] cursor-pointer py-3 border-none rounded sm:text-sm text-xs">Track Order</button>
          </div>
          )})}
      </div>
      
    </div>
    </div>
  )
}

export default MyOrders
