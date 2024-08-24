import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary/10 py-12 mt-12">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1,delay:0.2}} className="container flex justify-between items-center">

        {/* logo section */}
        
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-primary">Fruit</p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </div>
        

        {/* Social icons section */}
        <div className="text-3xl flex items-center gap-4 mt-6 text-gray-700">
          <FaInstagram/>
          <FaTwitter/>
          <FaFacebookF/>
        </div>
      </motion.div>
      
        <hr className="h-[2px] mt-20 bg-black border-none  md:mx-20 sm:mx-21 "/>
      
      <p className="mt-5 flex justify-center">Copyright 2024  © Cinnnamon.com - All Rights Reserved. </p>
    </footer>
  );
};

export default Footer;
