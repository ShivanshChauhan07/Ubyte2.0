import React, { forwardRef } from "react";

const Navbar = forwardRef((props, ref) => {
  return (
    <nav
      ref={ref}
      className=" flex justify-between px-28 font-['Manrope'] font-bold mt-5 "
    >
      <div className=" basis-1/5 my-auto">
        <img src="/logo.png" alt="logo" className="w-[98px] h-16" />
      </div>
      <div className=" basis-3/5 my-auto">
        <ul className="flex justify-evenly mx-10 ">
          <li className="grow text-center p-4 py-6 hover:text-[#0c96d4] hover:cursor-pointer">
            Home
          </li>

          <li className="grow text-center p-4 py-6 hover:text-[#0c96d4] hover:cursor-pointer">
            Projects
            <i className="fa-solid fa-chevron-down fa-bounce fa-xs mx-2 text-[#0c96d4]"></i>
          </li>
          <li className="grow text-center p-4 py-6 hover:text-[#0c96d4] hover:cursor-pointer">
            Blogs
            <i className="fa-solid fa-chevron-down fa-bounce fa-xs mx-2 text-[#0c96d4]"></i>
          </li>
          <li className="grow text-center p-4 py-6 hover:text-[#0c96d4] hover:cursor-pointer">
            Shop
          </li>
          <li className="grow text-center p-4 py-6 hover:text-[#0c96d4] hover:cursor-pointer">
            About Us
          </li>
        </ul>
      </div>
      <div className=" basis-1/5 text-right my-auto">
        <button className=" bg-[#0c96d4] text-white rounded-3xl p-3 px-6 font-bold  ">
          Contact
        </button>
      </div>
    </nav>
  );
});

export default Navbar;
