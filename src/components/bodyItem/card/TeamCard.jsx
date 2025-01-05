import React from "react";

const TeamCard = ({ img, name, role, desc }) => {
  return (
    <div className="p-3">
      <img src={img} alt="profile" className="rounded-full" />
      <div className="py-2">
        <div className="flex flex-col gap-1 text-center">
          <h3 className="font-['Manrope'] text-black font-bold">{name}</h3>
          <h6 className="font-['Manrope'] text-[#c0c4cd] font-semibold">
            {role}
          </h6>
        </div>
        <div className="my-2 text-center text-[#60697b] leading-tight">
          <p>Lorem ipsum dolor sit amet consectetur, adipisici</p>
        </div>
        <div className="text-center">sticker</div>
      </div>
    </div>
  );
};

export default TeamCard;
