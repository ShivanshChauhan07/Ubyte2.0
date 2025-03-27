import React from "react";
import CartCard from "../shop/CartCard";
import { useSelector } from "react-redux";

const OrderSummary = ({ handleOnSubmit }) => {
  const cartListSelector = useSelector((store) => store.cart.cartItem);

  return (
    <div className="flex flex-col gap-y-4 bg-[#fafafa] rounded-lg p-3 font-['Manrope'] h-full shadow-lg">
      <h2 className="text-center text-2xl font-semibold">Your Order Summary</h2>
      <div>
        {cartListSelector.map((item) => {
          return (
            <CartCard
              {...item}
              showDelete={false}
              showBadge={true}
              showControls={false}
              showPrice={false}
              smallName={true}
            />
          );
        })}
      </div>
      <div className="flex gap-3 ">
        <input
          type="text"
          placeholder="Gift Card or Discount Code"
          className="p-2 border rounded-md text-sm w-1/2 "
        />
        <button className="p-2 rounded-md bg-[#0c96d4] text-white font-medium w-1/4">
          Apply
        </button>
      </div>
      <div className="flex flex-col gap-y-3 my-3 border-t-2 py-3">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>price</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping</p>
          <p>Calculated at next Step</p>
        </div>
      </div>
      <div className="flex justify-between border-t-2 py-3">
        <p>Total</p>
        <p>price</p>
      </div>
      <button
        className="p-2 rounded-md bg-[#0c96d4] font-medium text-white w-full my-5"
        type="submit"
      >
        Checkout Now
      </button>
    </div>
  );
};

export default OrderSummary;
