import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const heroDivVariant = {
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
      duration: 0.5,
    },
  },
};

const Hero = ({ heroHeight }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);
  const lastTimeRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const speed = 0.5; // Base speed (lower = slower)

  const logos = [
    { id: 1, src: "/companies/image1.jpg", name: "Escorts Kubota Limited" },
    { id: 2, src: "/companies/image9.png", name: "EH Group" },

    { id: 3, src: "/companies/image3.webp", name: "ANCIT Consulting" },
    {
      id: 4,
      src: "/companies/image2.jpg",
      name: "Sports Lighting Solution LLP",
    },
    { id: 5, src: "/companies/image11.png", name: "Compage Automation" },
    { id: 6, src: "/companies/image4.png", name: "Decibels Lab Pvt Ltd" },
    { id: 7, src: "/companies/image8.png", name: "Intute AI" },
    { id: 8, src: "/companies/image5.png", name: "Navstream Innovations" },
    { id: 9, src: "/companies/image6.jpg", name: "Designing Alley" },
    { id: 10, src: "/companies/image7.png", name: "Wisnet Turkey" },

    { id: 11, src: "/companies/image10.jpg", name: "BioCoder Turkey" },
  ];

  // Double the logos for seamless looping
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;

    const handleResize = () => {
      // Get the actual width considering current zoom level
      const actualWidth = content.scrollWidth / 2;
      setContentWidth(actualWidth);
      // Reset position to prevent jumps
      setScrollX(0);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    const animate = (time) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      // Adjust speed based on device pixel ratio (zoom level)
      const zoomAdjustedSpeed = speed * (window.devicePixelRatio || 1);

      setScrollX((prev) => {
        const movement = (zoomAdjustedSpeed * delta) / 16;
        const newX = prev - movement;
        // Reset position when scrolled one full width
        return newX <= -contentWidth ? newX + contentWidth : newX;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [contentWidth]);

  return (
    <section
      style={{ minHeight: heroHeight }}
      className="px-28 font-['Manrope'] max-sm:px-5 max-sm:flex-col-reverse max-sm:items-center"
    >
      <section className="flex max-sm:flex-col">
        <motion.div className="flex w-1/2 items-center max-sm:w-full max-sm:pt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroDivVariant}
          >
            <motion.h1
              variants={divChildVariant}
              className="font-semibold text-[#343f52] text-5xl font-serif tracking-wide leading-tight max-sm:text-3xl max-sm:text-center"
            >
              Converting your <br />
              Idea into product
            </motion.h1>
            <motion.p
              variants={divChildVariant}
              className="text-[#60697b] text-2xl font-medium leading-relaxed my-6 max-sm:text-md max-sm:text-center"
            >
              From Design, Prototyping, Testing, Validation,
              <br className="block max-sm:hidden" /> Certifications to
              Production, we do it all
            </motion.p>
            <motion.div
              variants={divChildVariant}
              className="max-sm:flex max-sm:justify-center"
            >
              <motion.button className="bg-[#0c96d4] text-white text-lg rounded-badge w-40 p-4 px-6 font-bold mr-3 max-sm:w-1/3 max-sm:text-base max-sm:p-2.5 max-sm:px-2 max-sm:h-12 max-sm:ml-5">
                <Link to="/about">Explore Now</Link>
              </motion.button>
              <motion.button className="border-2 border-[#0c96d4] text-[#0c96d4] text-lg w-56 rounded-badge p-3 px-6 font-bold hover:bg-[#0c96d4] hover:text-white max-sm:w-1/2 max-sm:text-base max-sm:p-2 max-sm:px-2 max-sm:h-12">
                <Link to="/about">Meet Our Experts</Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="w-1/2 max-sm:w-full max-sm:flex max-sm:justify-center">
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
            className="aspect-auto w-10/12 pt-12 max-sm:w-8/12"
          />
        </div>
      </section>

      {/* Logo marquee section */}
      <div
        ref={containerRef}
        className="relative h-32 overflow-hidden mt-10 max-sm:h-40"
      >
        <motion.div
          ref={contentRef}
          className="absolute flex"
          style={{ x: scrollX }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="w-36 h-20 mx-4 flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-full p-3 h-28 aspect-square object-contain"
              />
              <p className="text-xs font-medium text-[#c9cdd4] text-center">
                {logo.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
