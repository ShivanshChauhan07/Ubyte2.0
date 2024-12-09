import React from "react";

const Card = ({ logo, heading, info }) => {
  return (
    <div className=" font-['Manrope'] flex flex-col gap-y-4  w-96 p-4">
      <div className="bg-[#3f78e0] rounded-badge p-4 w-fit mx-auto">
        <i className={`${logo} mx-2 text-xl text-white`}></i>
      </div>
      <h5 className="text-center text-2xl font-bold">{heading}</h5>
      <p>{info}</p>
      <button className="text-[#3f78e0] font-semibold">Learn More →</button>
    </div>
  );
};

export default Card;
