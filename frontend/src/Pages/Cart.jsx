import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const { cartItems,url ,fruitList, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="mt-10 p-10">
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-6 gap-10">
          <p className="text-sm mx-1 sm:text-base ">Items</p>
          <p className="text-sm mx-1 sm:text-base">Title</p>
          <p className="text-sm mx-1 sm:text-base">Price</p>
          <p className="text-sm mx-1 sm:text-base">Quantity</p>
          <p className="text-sm mx-3 sm:text-base">Total</p>
          <p className="text-sm mx-1 sm:text-base">Remove</p>
        </div>
        <br />
        <hr />
        {fruitList.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="">
                  <div className="cart-items-title cart-items-item grid grid-cols-6 my-5 gap-10 ">
                    <img src={url+ "/images/"+item.image} alt="" className="max-w-10"/>
                    <p className="mx-1">{item.name}</p>
                    <p className="mx-1">₹{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>₹{item.price * cartItems[item._id]}</p>
                    <p
                      className="remove"
                      onClick={() => removeFromCart(item._id)}
                    >
                      <MdDeleteForever className="text-red-600 text-2xl cursor-pointer" />
                    </p>
                  </div>
                  <hr />
                </div>
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom flex justify-between mt-20 gap-[12vw] sm:flex-row flex-col-reverse">
        <div className=" flex flex-col flex-1 gap-[20px] ">
          <h2 className="text-2xl font-bold">Cart Total</h2>
          <div className="">
            <div className="flex justify-between my-1">
              <p>Subtotals</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details flex justify-between my-1">
              <p>Delivery Charges</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 50}</p>
            </div>
            <hr className="mx-2" />
            <div className="cart-total-details flex justify-between my-1">
              <b>Total</b>
              <b>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}
              </b>
            </div>
          </div>
          <button className="py-3 cursor-pointer rounded-md bg-primary max-w-48 text-white border-none" onClick={() => navigate("/order")}>
            Proceed To Checkout
          </button>
        </div>
        <div className="cart-promocode flex-1">
          <div >
            <p className="text-[#555]">If you have a promo code,Enter if here</p>
            <div className="cart-promocode-input mt-3 justify-between flex items-center bg-[#aeaeae] rounded-md">
              <input type="text" placeholder="Promo Code" className="pl-3 bg-transparent" />
              <button className="w-[150px] py-3 px-1.5 bg-black rounded text-white">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
