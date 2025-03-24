import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCartItems } from "../../slices/cart";

const CartCard = ({ id, name, img, price, indiaPrice, quantity }) => {
  const [counter, setCounter] = useState(quantity);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCartItems({ id, counter }));
  }, [counter]);

  return (
    <div className="flex p-3 py-6 justify-between font-['Manrope'] my-3  border-y-2">
      <div className="flex items-center gap-x-5">
        <i className="fa-solid fa-circle-xmark text-3xl w-fit h-fit rounded-full "></i>
        <img src={img} alt="" className="aspect-square w-24 rounded-lg" />
        <div className="flex-col gap-2 items-start">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm">COLOR: blue</p>
          <p className="text-sm">WEIGHT: 2 kg</p>
        </div>
      </div>
      <div className="flex items-center gap-x-8 ">
        <p>₹ {indiaPrice}</p>
        <div className="">
          <span
            className="bg-[#f5f5f5] p-2 text-xl font-semibold rounded-l-full select-none hover:cursor-pointer"
            onClick={() => {
              counter && setCounter(counter - 1);
            }}
          >
            -
          </span>
          <input
            className="w-10 text-center"
            type="text"
            value={counter}
            readOnly={true}
          />
          <span
            className="bg-[#f5f5f5] p-2 text-xl font-semibold rounded-r-full select-none hover:cursor-pointer"
            onClick={() => setCounter(counter + 1)}
          >
            +
          </span>
        </div>
        <p>₹ {indiaPrice + 100}</p>
      </div>
    </div>
  );
};

export default CartCard;
