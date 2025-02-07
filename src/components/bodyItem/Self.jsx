import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";

const whoVariant = {
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

const whoChildVariant = {
  hidden: {
    opacity: 0,
    x: -20,
    y: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 7,
      ease: "easeInOut",
    },
  },
};

const Self = () => {
  const selfRef = useRef(null);
  const selfView = useInView(selfRef, { once: true, amount: 0.5 });
  const control = useAnimation();

  useEffect(() => {
    if (selfView) control.start("visible");
  }, [selfRef, selfView]);
  return (
    <section className="my-28 px-28 flex max-sm:px-5 max-sm:flex-col ">
      <motion.div
        className="w-1/2 max-sm:w-full"
        initial={{ opacity: 0, x: -50 }}
        animate={control}
        variants={imgVariant}
      >
        <img src="/sample/self.png" alt="pic" />
      </motion.div>
      <motion.div
        ref={selfRef}
        className="w-1/2 px-10 font-['Manrope'] py-10 max-sm:w-full max-sm:px-0 max-sm:pb-0"
        initial="hidden"
        animate={control}
        variants={whoVariant}
      >
        <motion.h4
          variants={whoChildVariant}
          className="text-[#aab0bc] font-bold"
        >
          WHO ARE WE?
        </motion.h4>
        <motion.h2
          variants={whoChildVariant}
          className="text-[#343f52] font-serif font-semibold text-4xl my-4 tracking-wide leading-snug max-sm:text-3xl"
        >
          Company that believes in the
          <br className="block max-sm:hidden" /> power of creative strategy.
        </motion.h2>
        <motion.p
          variants={whoChildVariant}
          className="text-[#aab0bc] my-5 pr-10 max-sm:pr-0"
        >
          We provide end to end product design and manufacturing services to
          individuals and business at unbeatable prices. Backed by trust of 100+
          clients for 400+ products spread across the world, we will bring your
          idea to life. So why not give us a try.
        </motion.p>
        <div className="text-[#aab0bc] flex max-sm:gap-1">
          <div>
            <motion.p variants={whoChildVariant} className="my-3">
              {" "}
              <span className="font-semibold text-[#343f52]">
                Full-Service Solutions:
              </span>{" "}
              We handle every stage of product development, from design to
              manufacturing.
            </motion.p>
            <motion.p variants={whoChildVariant} className="my-3">
              <span className="font-semibold text-[#343f52]">
                {" "}
                Global Expertise:{" "}
              </span>{" "}
              Successful products delivered across the world.
            </motion.p>
          </div>
          <div>
            <motion.p variants={whoChildVariant} className="my-3">
              <span className="font-semibold text-[#343f52]">
                {" "}
                Skilled Team:{" "}
              </span>{" "}
              Experienced engineers and designers ensure quality and innovation.
            </motion.p>
            <motion.p variants={whoChildVariant} className="my-3">
              <span className="font-semibold text-[#343f52]">
                {" "}
                Cost-Effective:{" "}
              </span>{" "}
              High-quality solutions at competitive prices.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Self;
