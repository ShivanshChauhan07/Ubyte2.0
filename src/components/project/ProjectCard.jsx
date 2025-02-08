import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectCard = ({ inverted = false }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["-50px", "50px"]);

  return (
    <div
      className={`relative flex ${
        inverted ? "flex-row-reverse" : "flex-row"
      } items-center w-3/4 mx-auto my-16`}
    >
      <img src="/project/p1.png" alt="Project" className="rounded-xl w-3/5" />

      <motion.div
        ref={cardRef}
        className={`relative ${
          inverted ? "left-32" : "right-32"
        } top-20 p-10 rounded-xl shadow-lg bg-white w-6/12`}
        style={{ translateY }}
      >
        <div>
          <h1 className="text-sm uppercase text-gray-500">Cosmetic</h1>
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-4">Heading of the Project</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            commodi pariatur atque accusantium, optio
          </p>
        </div>
        <div>
          <button className="mt-4 px-4 py-2 bg-[#0c96d4] text-white rounded-lg hover:bg-blue-600">
            Project Link
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
