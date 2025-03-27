import React from "react";
import Address from "../components/checkout/Address";
import OrderSummary from "../components/checkout/OrderSummary";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  const handleOnSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="px-24">
      <h2 className="font-['Manrope'] font-semibold text-3xl tracking-wider my-10">
        Billing Details
      </h2>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="flex">
          <div className="basis-4/6 ">
            <Address
              register={register}
              errors={errors}
              handleOnSubmit={handleOnSubmit}
            />
          </div>
          <div className="basis-2/6 p-3">
            <OrderSummary />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
