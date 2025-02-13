import React, { useState } from "react";

const ProductCarousel = ({ selectProduct, setSelectProduct, imageAdd }) => {
  const [index, setindex] = useState(0);
  const visibleImg = imageAdd.slice(index, index + 4);
  const next = () => {
    if (index < imageAdd.length - 4) {
      setindex(index + 1);
    }
  };
  const prev = () => {
    if (index > 0) {
      setindex(index - 1);
    }
  };
  return (
    <div className="relative flex my-4 justify-around items-center px-6 overflow-hidden ">
      <figure
        className="bg-[#0c96d4]/50 absolute left-0 w-10 h-10 flex text-center rounded-full justify-center items-center select-none text-white  text-2xl font-semibold hover:cursor-pointer hover:bg-[#0c96d4]"
        onClick={prev}
      >
        {"<"}
      </figure>
      {visibleImg.map((img, i) => {
        return (
          <img
            key={i}
            src={img}
            alt=""
            className="w-16 h-16 hover:cursor-pointer"
            onClick={() => {
              setSelectProduct(img);
            }}
          />
        );
      })}

      <figure
        className="bg-[#0c96d4]/50 absolute right-0 rounded-full w-10 h-10 flex justify-center items-center select-none  text-white text-2xl font-semibold hover:cursor-pointer hover:bg-[#0c96d4]"
        onClick={next}
      >
        {">"}
      </figure>
    </div>
  );
};

export default ProductCarousel;
