import React, { forwardRef } from "react";
import { motion } from "motion/react";
import { Link, Links, useLocation } from "react-router";

const ulVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      staggerChildren: 0.5,
    },
  },
};

const liVariant = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      damping: 50,
    },
  },
};

const Navbar = forwardRef((props, ref) => {
  const location = useLocation();
  return (
    <nav
      ref={ref}
      className={` flex justify-between px-28 font-['Manrope'] font-bold  ${
        location.pathname === "/about" ? "bg-[#f6f7f9] pt-5" : "mt-5"
      } max-sm:hidden`}
    >
      <div className=" basis-1/5 my-auto">
        <motion.img
          initial={{ x: -50, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              damping: 50,
              delay: 0.3,
            },
          }}
          src="/logo.png"
          alt="logo"
          className="w-[98px] h-16"
        />
      </div>
      <div className=" basis-3/5 my-auto">
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={ulVariant}
          className="flex justify-evenly mx-10 "
        >
          <motion.li
            variants={liVariant}
            className="grow text-center p-4 py-6 hover:text-[#0c96d4] hover:cursor-pointer"
          >
            <Link to={"/"}> Home </Link>
          </motion.li>

          <motion.li
            variants={liVariant}
            className="grow text-center p-4 py-6 hover:text-[#0c96d4] hover:cursor-pointer"
          >
            <Link to={"/project"}> Projects </Link>
            <i className="fa-solid fa-chevron-down fa-bounce fa-xs mx-2 text-[#0c96d4]"></i>
          </motion.li>
          <motion.li
            variants={liVariant}
            className="grow text-center p-4 py-6 hover:text-[#0c96d4] hover:cursor-pointer"
          >
            <Link to={"/"}> Blogs </Link>

            <i className="fa-solid fa-chevron-down fa-bounce fa-xs mx-2 text-[#0c96d4]"></i>
          </motion.li>
          <motion.li
            variants={liVariant}
            className="grow text-center p-4 py-6 hover:text-[#0c96d4] hover:cursor-pointer"
          >
            <Link to={"/shop"}>Shop</Link>
          </motion.li>
          <motion.li
            variants={liVariant}
            className="grow text-center p-4 py-6 hover:text-[#0c96d4] hover:cursor-pointer"
          >
            <Link to={"/about"}> About Us</Link>{" "}
          </motion.li>
        </motion.ul>
      </div>
      <div className=" basis-1/5 text-right my-auto">
        <motion.button
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{
            scale: [1, 1.2, 1, 1.2, 1],
            opacity: 1,
            transition: {
              ease: "easeInOut",
              duration: 2,
            },
          }}
          className=" bg-[#0c96d4] text-white rounded-3xl p-3 px-6 font-bold hover:shadow-lg "
        >
          Contact Us
        </motion.button>
      </div>
    </nav>
  );
});

export default Navbar;
