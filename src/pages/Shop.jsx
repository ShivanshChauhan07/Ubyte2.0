import React from "react";
//import ShopCard from "../components/shop/ShopCard";
import shopData from "../utils/shopCardData";

const ShopCard = React.lazy(() => import("../components/shop/ShopCard"));

const Shop = () => {
  return (
    <section className="font-['Manrope']">
      <div className="relative py-4 my-4 w-full h-72 ">
        <p className="absolute left-[35rem] top-1/3 text-white font-bold text-6xl select-none ">
          Shop With Us
        </p>
        <img src="/shop/banner.jpg" alt="" className="w-full h-full" />
      </div>
      <div className="px-28 my-6 flex flex-col gap-y-10">
        {shopData.map((data) => {
          return <ShopCard key={data.id} {...data} />;
        })}
      </div>
    </section>
  );
};

export default Shop;
