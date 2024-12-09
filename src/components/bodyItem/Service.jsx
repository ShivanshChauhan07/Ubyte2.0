import React from "react";
import Card from "./card/Card";
import cardData from "../../utils/cardData";

const Service = () => {
  return (
    <section className=" px-28">
      <div className=" flex justify-evenly ">
        <figure>
          <img src="/companies/image1.png" alt="" className="w-36 p-3 h-full" />
        </figure>
        <figure>
          <img src="/companies/image2.png" alt="" className="w-36 p-3 h-full" />
        </figure>
        <figure>
          <img src="/companies/image3.png" alt="" className="w-36 p-3 h-full" />
        </figure>
        <figure>
          <img src="/companies/image4.png" alt="" className="w-36 p-3 h-full" />
        </figure>
        <figure>
          <img src="/companies/image5.png" alt="" className="w-36 p-3 h-full" />
        </figure>
        <figure>
          <img src="/companies/image6.png" alt="" className="w-36 p-3 h-full" />
        </figure>
      </div>
      <div className=" text-center">
        <h4 className="font-['Manrope'] text-[#c9cdd4] font-bold mt-32">
          WHAT WE DO ?
        </h4>
        <h2 className=" text-[#343f52] text-4xl font-serif font-semibold tracking-wide leading-snug my-4">
          The service we offer is specifically <br /> designed to meet your
          needs.
        </h2>
        <div className=" my-5 flex">
          {cardData.map((card, index) => {
            return (
              <Card
                key={index}
                logo={card.logo}
                heading={card.heading}
                info={card.info}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
