import React, { useEffect, useState } from "react";
//import ShopCard from "../components/shop/ShopCard";
import shopData from "../utils/shopCardData";
import Loading from "./Loading";

const ShopCard = React.lazy(() => import("../components/shop/ShopCard"));

const Shop = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, [500]);
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <section className="font-['Manrope']">
      <div className="relative py-4 my-4 w-full h-72 ">
        <p className="absolute left-[35rem] top-1/3 text-white font-bold text-6xl select-none max-sm:left-1/4 max-sm:text-3xl">
          Shop With Us
        </p>
        <img
          src="/shop/banner3.png"
          alt=""
          className="w-full h-full max-sm:h-4/6"
        />
      </div>
      <div className="px-28 my-6 flex flex-col gap-y-10 max-sm:px-2">
        {shopData.map((data) => {
          return <ShopCard key={data.id} {...data} />;
        })}
      </div>
    </section>
  );
};

export default Shop;
