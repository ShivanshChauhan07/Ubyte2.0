import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { animate } from "motion";

const worksVarirant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imgVariant = {
  visible: {
    x: -5,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      ease: "easeInOut",
    },
  },
};

const worksChildVariant = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 7,
      ease: "easeInOut",
    },
  },
};

const Steps = () => {
  const workRef = useRef(null);
  const workView = useInView(workRef, { once: true, amount: 0.5 });
  const control = useAnimation();

  useEffect(() => {
    if (workView) control.start("visible");
  }, [workRef, workView]);

  return (
    <section className=" px-28 flex">
      <motion.div
        ref={workRef}
        initial={{ x: -50, opacity: 0 }}
        animate={control}
        variants={imgVariant}
        className="basis-1/2"
      >
        <img src="/sample/step.png" alt="pic" />
      </motion.div>
      <motion.div
        className="basis-1/2 py-36"
        initial="hidden"
        animate={control}
        variants={worksVarirant}
      >
        <div>
          <motion.h2
            variants={worksChildVariant}
            className="text-[#343f52] font-serif font-semibold text-3xl tracking-wide"
          >
            How It Works?
          </motion.h2>
          <motion.p
            variants={worksChildVariant}
            className="text-[#60697b] font-['Manrope'] font-medium text-xl my-6"
          >
            So here are three working steps why our <br /> valued customers
            choose us.
          </motion.p>
        </div>
        <div>
          <div className="flex justify-between my-6 ">
            <figure className="bg-[#0c96d4] rounded-full w-fit h-10 p-4 flex items-center">
              <h1 className="font-medium text-lg text-white rounded-full">1</h1>
            </figure>
            <div className="mx-10 pr-36">
              <motion.h4
                variants={worksChildVariant}
                className="text-lg font-semibold"
              >
                Collect Ideas
              </motion.h4>
              <motion.p
                variants={worksChildVariant}
                className="text-[#60697b] text-base leading-snug"
              >
                Nulla vitae elit libero pharetra augue dapibus. Praesent commodo
                cursus.
              </motion.p>
            </div>
          </div>
          <div className="flex justify-between my-6 ">
            <figure className="bg-[#0c96d4] rounded-full w-fit h-10 p-4 flex items-center">
              <h1 className="font-medium text-lg text-white rounded-full">2</h1>
            </figure>
            <div className="mx-10 pr-36">
              <motion.h4
                variants={worksChildVariant}
                className="text-lg font-semibold"
              >
                Data Analysis
              </motion.h4>
              <motion.p
                variants={worksChildVariant}
                className="text-[#60697b] text-base leading-snug"
              >
                Nulla vitae elit libero pharetra augue dapibus. Praesent commodo
                cursus.
              </motion.p>
            </div>
          </div>
          <div className="flex justify-between my-6 ">
            <figure className="bg-[#0c96d4] rounded-full w-fit h-10 p-4 flex items-center">
              <h1 className="font-medium text-lg text-white rounded-full">3</h1>
            </figure>
            <div className="mx-10 pr-36">
              <motion.h4
                variants={worksChildVariant}
                className="text-lg font-semibold"
              >
                Finalize Product
              </motion.h4>
              <motion.p
                variants={worksChildVariant}
                className="text-[#60697b] text-base leading-snug"
              >
                Nulla vitae elit libero pharetra augue dapibus. Praesent commodo
                cursus.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Steps;
