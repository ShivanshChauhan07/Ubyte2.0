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
      className={` px-28 font-['Manrope'] flex my-5 max-sm:px-5
         max-sm:flex-col-reverse max-sm:items-center`}
    >
      <motion.div className=" flex w-1/2  items-center max-sm:w-full max-sm:pt-10 ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroDivVariant}
        >
          <motion.h1
            variants={divChildVariant}
            className="font-semibold text-[#343f52] text-5xl font-serif tracking-wide leading-tight max-sm:text-3xl max-sm:text-center "
          >
            Converting your <br />
            Idea into product
          </motion.h1>
          <motion.p
            variants={divChildVariant}
            className="text-[#60697b] text-2xl font-medium leading-relaxed my-6 max-sm:text-md max-sm:text-center"
          >
            From Design, Prototyping, Testing, Validation,
            <br className="block max-sm:hidden" /> Certifications to Production,
            we do it all
          </motion.p>
          <motion.div variants={divChildVariant}>
            <motion.button className=" bg-[#0c96d4] text-white text-lg  rounded-badge w-40 p-4 px-6 font-bold mr-3 max-sm:w-1/3 max-sm:text-base max-sm:p-2.5 max-sm:px-2 max-sm:h-12 max-sm:ml-5 ">
              Explore Now
            </motion.button>
            <motion.button className="border-2 border-[#0c96d4] text-[#0c96d4] text-lg w-56 rounded-badge p-3 px-6 font-bold hover:bg-[#0c96d4] hover:text-white max-sm:w-1/2 max-sm:text-base max-sm:p-2 max-sm:px-2 max-sm:h-12 ">
              Meet Our Experts
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="w-1/2 max-sm:w-full ">
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
