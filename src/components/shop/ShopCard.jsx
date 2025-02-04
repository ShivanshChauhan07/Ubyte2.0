import React from "react";

const ShopCard = () => {
  return (
    <div className="border-2 border-slate-100 flex ">
      <div className="border-r border-slate-100 basis-3/4 p-6">
        <div className="flex items-center gap-x-4">
          <img
            src="https://risingtheme.com/html/demo-furea/furea/assets/img/product/product10.webp"
            alt=""
            className="w-1/5 rounded-md"
          />
          <div>
            <h3 className="font-semibold text-xl py-4">
              Larger Minimal Wooden Chair
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              deleniti quibusdam doloribus placeat voluptatibus, explicabo
              molestiae ex consequatur similique odit, aperiam sed, quod
              voluptas eveniet hic! Numquam hic libero placeat!
            </p>
          </div>
        </div>
      </div>
      <div className="basis-1/4 content-center ">
        <div className="flex flex-col items-center gap-y-2">
          <h3 className="text-3xl font-semibold text-[#0c96d4]">$299.00</h3>
          <p>⭐⭐⭐⭐⭐</p>
          <button className=" border border-[#0c96d4] text-[#0c96d4] font-medium text-lg p-2 w-40 rounded-sm hover:bg-[#0c96d4] hover:text-white ">
            <i className="fa-solid fa-bag-shopping mr-3"></i>
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
