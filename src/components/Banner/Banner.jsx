import React from "react";
import HeroImg from "../../assets/7.jpg";
import { motion } from "framer-motion";
import { slideUp } from "../../utility/animation";

const Banner = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
          {/*text content section*/}
          <div className="flex flex-col items-center justify-center px-10 py-20 pr-24 space-y-5 text-center md:text-left md:py-0 md:px-0 md:items-start">
            <motion.h1
              variants={slideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl font-bold xl:text-5xl"
            >
              Unlock a Passion, Side Hustle, or New{" "}
              <span className="text-gray-400 underline">Professional</span>
            </motion.h1>
            <motion.p
              variants={slideUp(0.4)}
              initial="initial"
              animate="animate"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              voluptatum laboriosam, deserunt natus maxime ipsa omnis ratione
              quasi accusantium, quos fuga{""}.
            </motion.p>
            <motion.button
              variants={slideUp(0.6)}
              initial="initial"
              animate="animate"
              className="duration-300 bg-gray-900 primary-btn hover:bg-primary"
            >
              More News
            </motion.button>
          </div>
          {/*Hero image section */}
          <div className="flex items-center justify-center">
            <motion.img
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              src={HeroImg}
              alt=""
              className="W-[80%] md:w-[550px] xl:w-[600px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
