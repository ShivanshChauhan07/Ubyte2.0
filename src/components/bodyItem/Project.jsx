import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";

const projectVariant = {
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

const projectChildrenVariant = {
  hidden: {
    x: -40,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 50,
      ease: "easeInOut",
    },
  },
};

const Project = () => {
  const projectRef = useRef(null);
  const projectView = useInView(projectRef, { once: true, amount: 0.5 });
  const control = useAnimation();

  useEffect(() => {
    if (projectView) control.start("visible");
  }, [projectRef, projectView]);
  return (
    <motion.section
      ref={projectRef}
      initial="hidden"
      animate={control}
      variants={projectVariant}
      className=" text-center"
    >
      <motion.h4
        variants={projectChildrenVariant}
        className='font-["Manrope"] font-bold text-[#aab0bc] max-sm:mt-4 max-sm:mx-5'
      >
        LATEST PROJECTS
      </motion.h4>
      <motion.h2
        variants={projectChildrenVariant}
        className="font-serif font-semibold text-[#343f52] text-4xl my-5 tracking-wide leading-snug max-sm:mx-5 max-sm:text-3xl"
      >
        Check out some of our awesome projects <br /> with creative ideas and
        great design.
      </motion.h2>
      <div className="carousel carousel-center bg-white rounded-box w-full space-x-4 p-4 max-sm:w-11/12 max-sm:p-2 max-sm:mt-4">
        <div className="carousel-item w-1/3 max-sm:w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            className="rounded-box w-full h-80"
          />
        </div>
        <div className="carousel-item w-1/3 max-sm:w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            className="rounded-box w-full h-80"
          />
        </div>
        <div className="carousel-item w-1/3 max-sm:w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            className="rounded-box w-full h-80"
          />
        </div>
        <div className="carousel-item w-1/3 max-sm:w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            className="rounded-box w-full h-80"
          />
        </div>
        <div className="carousel-item w-1/3 max-sm:w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            className="rounded-box w-full h-80"
          />
        </div>
        <div className="carousel-item w-1/3 max-sm:w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            className="rounded-box w-full h-80"
          />
        </div>
        <div className="carousel-item w-1/3 max-sm:w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            className="rounded-box w-full h-80"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
