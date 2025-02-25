import React, { useEffect, useRef, useState } from "react";
import TeamCard from "./card/TeamCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, useAnimation, useInView } from "motion/react";
import { HashLink } from "react-router-hash-link";
import aboutTeamData from "../../utils/aboutTeamData";

const teamVariant = {
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

const teamChildVariant = {
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

const teamCarsolueVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1,
      ease: "easeIn",
    },
  },
};

const Team = () => {
  const teamRef = useRef(null);
  const teamView = useInView(teamRef, { once: true, amount: 0.5 });
  const control = useAnimation();
  const [play, setPlay] = useState(false);

  console.log(play);

  useEffect(() => {
    if (teamView) {
      control.start("visible");
      setTimeout(() => {
        setPlay(true);
      }, 5000);
    }
  }, [teamRef, teamView]);
  return (
    <section className="px-28 flex mb-28 max-sm:px-5 max-sm:flex-col">
      <motion.div
        className=" basis-1/3 font-['Manrope'] text-[#aab0bc] flex flex-col gap-6 "
        initial="hidden"
        animate={control}
        variants={teamVariant}
        ref={teamRef}
      >
        <motion.div variants={teamChildVariant}>
          <h4 className="font-bold">MEET THE TEAM</h4>
        </motion.div>
        <motion.div variants={teamChildVariant}>
          <h1 className="font-semibold font-serif text-4xl text-[#343f52] max-sm:text-3xl">
            Save your time and <br className="block max-sm:hidden" /> money by
            choosing our <br className="block max-sm:hidden" /> professional
            team.
          </h1>
        </motion.div>
        <motion.div variants={teamChildVariant}>
          <p className="px-2">
            With expertise in design, manufacturing, and global delivery, we
            ensure efficient, high-quality results. Let us handle the technical
            complexities so you can focus on growing your brand
          </p>
        </motion.div>
        <motion.div variants={teamChildVariant}>
          <HashLink to={"/about#team"} smooth>
            <button className="p-4 px-6 bg-[#0c96d4] text-white text-base font-bold rounded-full">
              See All Members
            </button>
          </HashLink>
        </motion.div>
      </motion.div>
      <motion.div
        className=" basis-2/3 flex w-8/12 max-sm:w-full"
        initial="hidden"
        animate={control}
        variants={teamCarsolueVariant}
      >
        <Swiper
          key={play}
          modules={[Navigation, Pagination, Autoplay, FreeMode]}
          spaceBetween={20}
          slidesPerView={window.innerWidth > 640 ? 3 : 1}
          navigation
          pagination={{ clickable: true }}
          freeMode={false}
          autoplay={play ? { delay: 1000, disableOnInteraction: false } : false}
          speed={2500}
          loop={true}
          initialSlide={0}
          className="flex-grow mx-10   "
        >
          {aboutTeamData.map((item, index) => {
            return (
              <SwiperSlide key={index} className="p-6">
                <TeamCard
                  img={item.img}
                  name={item.name}
                  role={item.role}
                  desc={item.desc}
                  social={item.social}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Team;
