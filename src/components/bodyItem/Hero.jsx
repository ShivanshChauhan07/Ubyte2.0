import React from "react";
import { motion } from "motion/react";

const heroDivVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const divChildVariant = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 5,
      visualDuration: 1,
    },
  },
};

const Hero = ({ heroHeight }) => {
  return (
    <section
      style={{ minHeight: heroHeight }}
      className={` px-28 font-['Manrope'] flex my-5 h`}
    >
      <motion.div className=" w-1/2 pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroDivVariant}
        >
          <motion.h1
            variants={divChildVariant}
            className="font-semibold text-[#343f52] text-5xl font-serif tracking-wide leading-tight"
          >
            We bring solutions to <br /> make life easier for <br /> our
            customers.
          </motion.h1>
          <motion.p
            variants={divChildVariant}
            className="text-[#60697b] text-2xl font-medium leading-relaxed my-6"
          >
            We have considered our solutions to <br />
            support every stage of your growth.
          </motion.p>
          <motion.div variants={divChildVariant}>
            <motion.button className=" bg-[#0c96d4] text-white text-lg  rounded-badge w-40 p-4 px-6 font-bold mr-3 ">
              Explore Now
            </motion.button>
            <motion.button className="border-2 border-[#0c96d4] text-[#0c96d4] text-lg w-36 rounded-badge p-3 px-6 font-bold hover:bg-[#0c96d4] hover:text-white ">
              Free Trial
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="w-1/2">
        <motion.img
          initial={{ y: -50, x: 50, opacity: 0 }}
          animate={{
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
              scale: 1.1,
              ease: "easeInOut",
              duration: 0.5,
              delay: 0.3,
            },
          }}
          src="/sample/hero.png"
          alt="Hero"
          className="pt-20"
        />
      </div>
    </section>
  );
};

export default Hero;
