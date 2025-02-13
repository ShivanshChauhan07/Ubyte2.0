import React, { forwardRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router";
import { HashLink } from "react-router-hash-link";

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
  const [shadow, setShadow] = useState(false);
  const [burger, setBurger] = useState(false);
  const [screenWidth, setScreenWidth] = useState("");

  console.log(screenWidth);

  useEffect(() => {
    const handleChange = () => {
      if (window.scrollY > 50) setShadow(true);
      else setShadow(false);
    };
    window.addEventListener("scroll", handleChange);

    return () => {
      window.removeEventListener("scroll", handleChange);
    };
  }, []);

  useEffect(() => {
    const handleChange = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleChange);

    return () => window.removeEventListener("resize", handleChange);
  }, []);

  return (
    <nav
      ref={ref}
      className={` sticky top-0 z-20  font-['Manrope'] font-bold  ${
        location.pathname === "/about" ? "bg-[#f6f7f9] pt-5" : "mt-5 bg-white"
      }${
        shadow && "shadow-md bg-white"
      } max-sm:flex-col max-sm:items-start max-sm:px-2 `}
    >
      <div className="hidden max-sm:block" onClick={() => setBurger(!burger)}>
        <i className="fa-solid fa-bars text-4xl"></i>
      </div>
      <div
        className={`flex justify-between px-28 ${
          !burger
            ? "max-sm:hidden"
            : "max-sm: w-1/4 flex flex-col items-end mx-4 justify-center "
        }`}
      >
        <div className=" basis-1/5 my-auto py-2 ">
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
            className="w-[98px] h-16 max-sm:mx-auto"
          />
          <span className="">Ubyte Consulting </span>
        </div>
        <div className=" basis-3/5 my-auto">
          <motion.ul
            initial="hidden"
            animate="visible"
            variants={ulVariant}
            className="flex justify-evenly mx-10 max-sm:block "
          >
            <Link to={"/"} onClick={() => setBurger(false)}>
              <motion.li
                variants={liVariant}
                className="grow text-center p-4 py-6 hover:text-[#0c96d4] hover:cursor-pointer"
              >
                Home
              </motion.li>
            </Link>
            <Link to={"/project"} onClick={() => setBurger(false)}>
              <motion.li
                variants={liVariant}
                className="grow text-center p-4 py-6 hover:text-[#0c96d4] hover:cursor-pointer"
              >
                {" "}
                Projects{" "}
                <i className="fa-solid fa-chevron-down fa-bounce fa-xs mx-2 text-[#0c96d4]"></i>
              </motion.li>
            </Link>
            <Link to={"/blog"} onClick={() => setBurger(false)}>
              <motion.li
                variants={liVariant}
                className="grow text-center p-4 py-6 hover:text-[#0c96d4] hover:cursor-pointer"
              >
                {" "}
                Blogs{" "}
                <i className="fa-solid fa-chevron-down fa-bounce fa-xs mx-2 text-[#0c96d4]"></i>
              </motion.li>
            </Link>
            <Link to={"/shop"} onClick={() => setBurger(false)}>
              <motion.li
                variants={liVariant}
                className="grow text-center p-4 py-6 hover:text-[#0c96d4] hover:cursor-pointer"
              >
                Shop
              </motion.li>
            </Link>
            <Link to={"/about"} onClick={() => setBurger(false)}>
              <motion.li
                variants={liVariant}
                className="grow text-center p-4 py-6 hover:text-[#0c96d4] hover:cursor-pointer"
              >
                {" "}
                About Us
              </motion.li>
            </Link>
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
            className=" bg-[#0c96d4] text-white rounded-3xl p-3 px-6 font-bold hover:shadow-lg max-sm:hidden "
          >
            <HashLink to={"/about#contactForm"} smooth>
              Contact Us
            </HashLink>
          </motion.button>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
