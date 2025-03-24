import React from "react";

const grey = "#7f7f7f";

const CheckoutBox = ({ totalPrice }) => {
  return (
    <div className="flex flex-col gap-3 rounded-xl p-4 shadow-2xl  font-['Manrope'] text-[#7f7f7f]">
      <div>
        <h2 className="font-semibold text-lg text-black">Coupon</h2>
        <p className="my-2">Enter your coupon code if you have one.</p>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Coupon Code"
            className="p-3 rounded-md border border-[#7f7f7f]"
          />
          <button className="p-3 rounded-md bg-[#0c96d4] text-white">
            Apply Coupon
          </button>
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-lg text-black">Note</h2>
        <p className="my-2">Add special instructions for your seller...</p>
        <textarea
          name=""
          id=""
          rows={5}
          cols={45}
          className="border border-[#7f7f7f] rounded-md "
        ></textarea>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-black">SUBTOTAL</p>
            <p className="text-black">{totalPrice}</p>
          </div>
          <p className="text-black">GRAND TOTAL</p>
        </div>
        <div className="">
          <p className="my-3">Shipping & taxes calculated at checkout</p>
          <div className="flex justify-between">
            <button className="p-3 text-white rounded-md w-1/3 bg-[#0c96d4]">
              Update Cart
            </button>
            <button className="p-3 text-white rounded-md w-1/3 bg-[#0c96d4]">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBox;
