import React from "react";

const Body = ({ heroHeight }) => {
  console.log(heroHeight);
  return (
    <section
      style={{ minHeight: heroHeight }}
      className={` px-28 font-['Manrope'] flex my-5 h`}
    >
      <div className=" w-1/2 pt-40">
        <div>
          <h1 className="font-semibold text-[#343f52] text-5xl font-serif tracking-wide leading-tight">
            We bring solutions to <br /> make life easier for <br /> our
            customers.
          </h1>
          <p className="text-[#60697b] text-2xl font-medium leading-relaxed my-6">
            We have considered our solutions to <br />
            support every stage of your growth.
          </p>
          <div>
            <button className=" bg-[#3f78e0] text-white text-lg  rounded-badge w-40 p-4 px-6 font-bold mr-3 ">
              Explore Now
            </button>
            <button className=" text-[#3f78e0] text-lg w-36 rounded-badge p-3 px-6 font-bold hover:bg-[#3f78e0] hover:text-white ">
              Free Trial
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img src="/sample/hero.png" alt="Hero" className="pt-20" />
      </div>
    </section>
  );
};

export default Body;
