import React from "react";
import { Link } from "react-router";

const ShopCard = ({ id, name, img, desc, price }) => {
  return (
    <div className="border-2 border-slate-100 flex max-sm:block max-sm:w-fit ">
      <div className="border-r border-slate-100 basis-3/4 p-6">
        <div className="flex items-center gap-x-4 max-sm:block ">
          <img src={img} alt="" className="w-1/5 rounded-md max-sm:w-full" />
          <div>
            <h3 className="font-semibold text-xl py-4">{name}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </div>
      <div className="basis-1/4 content-center ">
        <div className="flex flex-col items-center gap-y-2">
          <h3 className="text-3xl font-semibold text-[#0c96d4]">${price}</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <button className=" border border-[#0c96d4] text-[#0c96d4] font-medium text-lg p-2 w-40 rounded-sm hover:bg-[#0c96d4] hover:text-white ">
            <i className="fa-solid fa-bag-shopping mr-3"></i>
            <Link to={`/shop/product/${id}`}> View More </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
