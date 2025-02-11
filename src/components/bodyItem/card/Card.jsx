import { motion } from "motion/react";

const Card = ({ logo, heading, info, variant }) => {
  return (
    <motion.div
      variants={variant}
      className=" font-['Manrope'] flex flex-col gap-y-4  w-96 p-4"
    >
      <div className="bg-[#0c96d4] rounded-full w-14 h-14 p-2 mx-auto flex items-center">
        <i className={`${logo}  text-xl text-white mx-auto`}></i>
      </div>
      <h5 className="text-center text-2xl font-bold">{heading}</h5>
      <p>{info}</p>
      <button className="text-[#0c96d4] font-semibold">Learn More →</button>
    </motion.div>
  );
};

export default Card;
