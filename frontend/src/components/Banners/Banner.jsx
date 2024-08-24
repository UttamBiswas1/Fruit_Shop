import React from "react";
import BannerImg from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { Fadeup, FadeLeft } from "../../utility/animation";

const Banner = () => {
  return (
    <section className="bg-secondary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{type:'spring',stiffness:100,delay:0.2}}
            viewport={{once:true}}
            src={BannerImg}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>
        {/* Brand Info */}
        <div className="flex flex-col justify-center ">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1 variants={FadeLeft(0.5)} initial="hidden" whileInView={"visible"} viewport={{once:true}} className="text-3xl lg:text-4xl font-bold uppercase"> Brand Info </motion.h1>
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
              <button className="primary-btn ">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
