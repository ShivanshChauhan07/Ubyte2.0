import React, { useEffect, useRef } from "react";
import Card from "./card/Card";
import cardData from "../../utils/cardData";
import { motion, useAnimation, useInView } from "motion/react";

const companiesVariant = {
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

const companiesChildrenVariant = {
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

const Service = () => {
  const control = useAnimation();
  const logoRef = useRef(null);
  const sectionRef = useRef(null);
  const logoView = useInView(logoRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (logoView) control.start("visible");
  }, [logoRef, logoView]);
  return (
    <section ref={sectionRef} className=" px-28">
      <motion.div
        ref={logoRef}
        initial="hidden"
        animate={control}
        variants={companiesVariant}
        className=" flex justify-evenly "
      >
        <motion.figure variants={companiesChildrenVariant}>
          <img src="/companies/image1.jpg" alt="" className="w-36 p-3 h-20" />
        </motion.figure>
        <motion.figure variants={companiesChildrenVariant}>
          <img src="/companies/image2.jpg" alt="" className="w-36 p-3 h-20" />
        </motion.figure>
        <motion.figure variants={companiesChildrenVariant}>
          <img src="/companies/image3.webp" alt="" className="w-36 p-3 h-20" />
        </motion.figure>
        <motion.figure variants={companiesChildrenVariant}>
          <img src="/companies/image4.png" alt="" className="w-36 p-3 h-20" />
        </motion.figure>
        <motion.figure variants={companiesChildrenVariant}>
          <img src="/companies/image5.png" alt="" className="w-36 p-3 h-20" />
        </motion.figure>
        <motion.figure variants={companiesChildrenVariant}>
          <img src="/companies/image6.jpg" alt="" className="w-36 p-3 h-20" />
        </motion.figure>
      </motion.div>
      <motion.div
        className=" text-center"
        initial="hidden"
        animate={control}
        variants={companiesVariant}
      >
        <motion.h4
          variants={companiesChildrenVariant}
          className="font-['Manrope'] text-[#c9cdd4] font-bold mt-32"
        >
          WHAT WE DO ?
        </motion.h4>
        <motion.h2
          variants={companiesChildrenVariant}
          className=" text-[#343f52] text-4xl font-serif font-semibold tracking-wide leading-snug my-4"
        >
          The service we offer is specifically <br /> designed to meet your
          needs.
        </motion.h2>
        <motion.div
          className=" my-5 flex"
          initial="hidden"
          animate={control}
          variants={companiesVariant}
        >
          {cardData.map((card, index) => {
            return (
              <Card
                key={index}
                logo={card.logo}
                heading={card.heading}
                info={card.info}
                variant={companiesChildrenVariant}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Service;
