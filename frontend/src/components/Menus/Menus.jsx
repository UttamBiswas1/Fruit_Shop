import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";
import { StoreContext } from "../../context/StoreContext";
import add_icon_white from '../../assets/add_icon_white.png';
import remove_icon_red from '../../assets/remove_icon_red.png';
import add_icon_green from '../../assets/add_icon_green.png';

const Menus = () => {
  const { url,fruitList,cartItems,addToCart,removeFromCart } = useContext(StoreContext);
  
  return (
    <section>
      <div className="container pt-12 pb-20">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-2xl font-bold text-left  pb-10 uppercase"
        >
          Our Menu
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {fruitList.map((item) => (
            // eslint-disable-next-line react/jsx-key
            <motion.div
              variants={FadeLeft(item.delay)}
              initial="hidden"
              whileInView={"visible"}
              whileHover={{ scale: 1.1 }}
              className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,00.15)] flex flex-row justify-around items-center gap-3"
            >
              <img
                src={url+ "/images/"+item.image}
                alt=""
                className="w-[60px] mb-4 scale-110 transform-translate-y-6 "
              />
              <div>
                <h1 className="text-lg font-semibold">{item.name}</h1>
                <p className="text text-secondary-lg font-semibold">
                ₹ {item.price}
                </p>
              </div>
        {!cartItems[item._id] ? (
          <img className="add"
            onClick={() => {
              addToCart(item._id)
            }}
            src={add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            {" "}
            <img  onClick={()=>{removeFromCart(item._id)}} src={remove_icon_red} alt="" />
            <p>{cartItems[item._id]}</p>
            <img  onClick={()=>{addToCart(item._id)}} src={add_icon_green} alt="" />
          </div>
        )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
