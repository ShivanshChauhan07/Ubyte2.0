import React from "react";
import ShopCard from "../components/shop/ShopCard";
import shopData from "../utils/shopCardData";

const Shop = () => {
  return (
    <section className="font-['Manrope']">
      <div className="p-8">banner</div>
      <div className="px-28">
        {shopData.map((data) => {
          return <ShopCard key={data.id} {...data} />;
        })}
      </div>
    </section>
  );
};

export default Shop;
