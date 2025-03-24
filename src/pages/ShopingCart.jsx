import React, { useEffect, useState } from "react";
import CartCard from "../components/shop/CartCard";
import CheckoutBox from "../components/shop/CheckoutBox";
import { useSelector } from "react-redux";

const ShopingCart = () => {
  const cartListSelector = useSelector((store) => store.cart.cartItem);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cartListSelector.length > 0)
      setTotalPrice(
        cartListSelector.reduce(
          (accumulator, currentValue) =>
            accumulator + currentValue.indiaPrice * currentValue.quantity,
          0
        )
      );
  }, [cartListSelector]);

  return (
    <div className="px-24">
      <div className="my-6 py-6">
        <h2 className="font-['Manrope'] text-3xl font-bold tracking-wider">
          Shopping Cart
        </h2>
      </div>
      <div className="flex font-['Manrope']  gap-x-5 my-2">
        <div className="basis-4/6">
          <div className="flex px-3 my-3 justify-between">
            <div>
              <h4 className="font-semibold">PRODUCT</h4>
            </div>
            <div className="flex gap-x-14">
              <h4 className="font-semibold">PRICE</h4>
              <h4 className="font-semibold">QUANTITY</h4>
              <h4 className="font-semibold">TOTAL</h4>
            </div>
          </div>
          {cartListSelector.map((item) => {
            return <CartCard key={item.id} {...item} />;
          })}
        </div>
        <div className="basis-2/6">
          <CheckoutBox totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
