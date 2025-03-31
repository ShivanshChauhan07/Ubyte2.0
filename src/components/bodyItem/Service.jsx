import React, { useEffect, useRef, useState } from "react";
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
      staggerChildren: 0.2,
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

const stats = [
  { id: 1, label: "Clients across the world", value: 50 },
  { id: 2, label: "Project Delivered", value: 300 },
  { id: 3, label: "PCBs Produced ", value: 45000 },
  { id: 4, label: "Year of Excellence", value: 6 },
];

const Service = () => {
  const control = useAnimation();
  const logoRef = useRef(null);
  const sectionRef = useRef(null);
  const logoView = useInView(logoRef, { once: true, amount: 0.5 });
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (logoView) control.start("visible");
  }, [logoRef, logoView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const intervals = stats.map((stat, index) => {
            const increment = Math.ceil(stat.value / 100);
            return setInterval(() => {
              setCounts((prevCounts) => {
                const newCounts = [...prevCounts];
                if (newCounts[index] < stat.value) {
                  newCounts[index] = Math.min(
                    newCounts[index] + increment,
                    stat.value
                  );
                } else {
                  clearInterval(intervals[index]);
                }
                return newCounts;
              });
            }, 20);
          });

          return () =>
            intervals.forEach(
              (interval) => interval && clearInterval(interval)
            );
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated, stats]);
  return (
    <section ref={sectionRef} className=" px-28 max-sm:px-5">
      <motion.h4
        variants={companiesChildrenVariant}
        className="font-['Manrope'] text-[#c9cdd4] font-bold mt-24 text-center my-6 max-sm:mt-6"
      >
        OUR COMMITMENTS & MILESTONES
      </motion.h4>
      <motion.div
        ref={logoRef}
        initial="hidden"
        animate={control}
        variants={companiesVariant}
        className=" flex justify-evenly max-sm:flex-wrap "
      >
        {stats.map((stat, index) => (
          <div key={stat.id} className="p-4 font-['Manrope']">
            <p className="text-4xl font-bold text-[#0c96d4] text-center">
              {counts[index]}
              <span className="text-[#0c96d4]">+</span>
            </p>
            <p className="text-gray-600 font-semibold mt-2 text-sm md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
      <motion.div
        className=" text-center"
        initial="hidden"
        animate={control}
        variants={companiesVariant}
      >
        <motion.h4
          variants={companiesChildrenVariant}
          className="font-['Manrope'] text-[#c9cdd4] font-bold mt-32 max-sm:mt-16"
        >
          WHAT WE DO ?
        </motion.h4>
        <motion.h2
          variants={companiesChildrenVariant}
          className=" text-[#343f52] text-4xl font-serif font-semibold tracking-wide leading-snug my-4 max-sm:text-3xl"
        >
          The service we offer is specifically{" "}
          <br className="block max-sm:hidden" /> designed to meet your needs.
        </motion.h2>
        <motion.div
          className=" my-5 flex max-sm:flex-wrap"
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
