import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Address = ({ register, errors, handleOnSubmit }) => {
  const [visibleError, setVisibleError] = useState({});

  useEffect(() => {
    if (errors && Object.keys(errors).length > 0) {
      setVisibleError(errors);

      const timer = setTimeout(() => {
        setVisibleError({});
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errors, handleOnSubmit]);

  return (
    <div className="flex flex-col gap-y-5 p-6 ">
      <div className="flex ">
        <div className="basis-1/2 flex flex-col gap-y-3">
          <p className="font-['Manrope'] font-medium">First Name</p>
          <input
            className="p-2 rounded-md border w-11/12 "
            placeholder="First Name"
            type="text"
            {...register("firstName", {
              required: "First Name is required",
            })}
          />
          {visibleError.firstName && (
            <p className="text-red-500">{visibleError.firstName.message}</p>
          )}
        </div>
        <div className="basis-1/2 flex flex-col gap-y-3">
          <p className="font-['Manrope'] font-medium">Last Name</p>
          <input
            className="p-2 rounded-md border w-full "
            placeholder="Last Name"
            type="text"
            {...register("lastName", {
              required: "Last Name is required",
            })}
          />
          {visibleError.lastName && (
            <p className="text-red-500">{visibleError.lastName.message}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="font-['Manrope'] font-medium">Company Name</p>
        <input
          className="p-2 rounded-md border w-full "
          placeholder="Company Name (Optional)"
          type="text"
          {...register("companyName")}
        />
        {visibleError.companyName && (
          <p className="text-red-500">{visibleError.companyName.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="font-['Manrope'] font-medium">Address</p>
        <input
          className="p-2 rounded-md border w-full "
          placeholder="Apartment, suite, etc. "
          type="text"
          {...register("address", {
            required: "Address is required",
          })}
        />
        {visibleError.address && (
          <p className="text-red-500">{visibleError.address.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-y-3">
        <p className="font-['Manrope'] font-medium">Town/City</p>
        <input
          className="p-2 rounded-md border w-full "
          placeholder="City Name"
          type="text"
          {...register("cityName", {
            required: "City name is required",
          })}
        />
        {visibleError.cityName && (
          <p className="text-red-500">{visibleError.cityName.message}</p>
        )}
      </div>
      <div className="flex ">
        <div className="basis-1/2 flex flex-col gap-y-3">
          <p className="font-['Manrope'] font-medium">Country/Region</p>
          <select
            className="p-2 rounded-md border w-11/12"
            {...register("country", { required: "Country is required" })}
          >
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="IN">India</option>
            <option value="UK">United Kingdom</option>
          </select>
          {visibleError.country && (
            <p className="text-red-500">{visibleError.country.message}</p>
          )}
        </div>
        <div className="basis-1/2 flex flex-col gap-y-3">
          <p className="font-['Manrope'] font-medium">Postal Code</p>
          <input
            className="p-2 rounded-md border w-full "
            placeholder="Postal Code / Zip Code"
            type="text"
            {...register("postalCode", {
              required: "Postal Code is required",
            })}
          />{" "}
          {visibleError.postalCode && (
            <p className="text-red-500">{visibleError.postalCode.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Address;
