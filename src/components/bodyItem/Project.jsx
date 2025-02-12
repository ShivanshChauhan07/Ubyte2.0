import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import projectData from "../../utils/projectData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={window.innerWidth > 640 ? 3 : 1}
        navigation
        pagination={{ clickable: true }}
        className="flex-grow mx-10   "
      >
        <div className=" rounded-box w-full space-x-4 p-4 max-sm:w-11/12 max-sm:p-2 max-sm:mt-4">
          {projectData.map((data, index) => {
            return (
              <SwiperSlide key={index} className="p-6">
                <img src={data.img} className="rounded-box w-full h-80" />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </motion.section>
  );
};

export default Project;
