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
    <section className="my-28 px-28 flex">
      <motion.div
        className="w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={control}
        variants={imgVariant}
      >
        <img src="/sample/self.png" alt="pic" />
      </motion.div>
      <motion.div
        ref={selfRef}
        className="w-1/2 px-10 font-['Manrope'] py-10"
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
          className="text-[#343f52] font-serif font-semibold text-4xl my-4 tracking-wide leading-snug"
        >
          Company that believes in the <br /> power of creative strategy.
        </motion.h2>
        <motion.p
          variants={whoChildVariant}
          className="text-[#aab0bc] my-5 pr-10"
        >
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et.
        </motion.p>
        <div className="text-[#aab0bc] flex">
          <div>
            <motion.p variants={whoChildVariant} className="my-3">
              {" "}
              Aenean eu leo quam ornare curabitur blandit tempus.
            </motion.p>
            <motion.p variants={whoChildVariant} className="my-3">
              Aenean eu leo quam ornare curabitur blandit tempus.
            </motion.p>
          </div>
          <div>
            <motion.p variants={whoChildVariant} className="my-3">
              Aenean eu leo quam ornare curabitur blandit tempus.
            </motion.p>
            <motion.p variants={whoChildVariant} className="my-3">
              Aenean eu leo quam ornare curabitur blandit tempus.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Self;
