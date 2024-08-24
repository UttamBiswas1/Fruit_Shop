import React from "react";
import BannerImg from "../../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { Fadeup, FadeLeft } from "../../utility/animation";

const Banner2 = () => {
  return (
    <section >
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
        {/* Brand Info */}
        <div className="flex flex-col justify-center ">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1 variants={FadeLeft(0.5)} initial="hidden" whileInView={"visible"} viewport={{once:true}} className="text-3xl lg:text-6xl font-bold uppercase"> Online Fruit Store </motion.h1>
            <motion.p variants={FadeLeft(0.7)} initial="hidden" whileInView={"visible"} viewport={{once:true}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus hic aliquam fugiat rerum, voluptatum consequatur
              deleniti accusamus dolor repudiandae fugit eaque a maiores labore
              deserunt odio vitae natus tempore expedita.
            </motion.p>
            <motion.p variants={FadeLeft(0.9)} initial="hidden" whileInView={"visible"} viewport={{once:true}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,
              necessitatibus fugit. Eveniet minus aliquid aut, a optio quia,
              possimus ab porro itaque vel quod?
            </motion.p>
            {/* button Section */}
            <motion.div
              variants={Fadeup(1.1)}
              initial="hidden"
              animate="visible"
              className=" flex justify-center md:justify-start"
            >
              <button className="primary-btn ">Download The App</button>
            </motion.div>
          </div>
        </div>
         {/* Banner Image */}
         <div className="flex justify-center items-center">
          <motion.img
            initial={{opacity:0,x:200,rotate:75}} 
            whileInView={{opacity:1,x:0,rotate:0}} 
            transition={{duration:1,delay:0.2}} 
            viewport={{once:true}}
            src={BannerImg}
            alt=""
            className="w-[400px] md:max-w-[500px] h-full object-cover drop-shadow "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
