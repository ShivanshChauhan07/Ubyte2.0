import React from "react";
//import ShopCard from "../components/shop/ShopCard";
import shopData from "../utils/shopCardData";

const ShopCard = React.lazy(() => import("../components/shop/ShopCard"));

const Shop = () => {
  return (
    <section className="font-['Manrope']">
      <div className="p-8">banner</div>
      <div className="px-28 my-10">
        {shopData.map((data) => {
          return <ShopCard key={data.id} {...data} />;
        })}
      </div>
    </section>
  );
};

export default Shop;
