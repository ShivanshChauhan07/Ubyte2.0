import React from "react";

const AboutCard = ({ card }) => {
  return (
    <div className="carousel-item">
      <div className=" card bg-base-100 w-80  shadow-xl border border-[#f6f7f9] text-center max-sm:mx-5">
        <figure>
          <img src={card.img} alt="person" className="rounded-full w-36 h-36" />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title mx-auto">{card.name}</h2>
          <h4>{card.role}</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing el</p>
          <div className="card-actions ">logo</div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
