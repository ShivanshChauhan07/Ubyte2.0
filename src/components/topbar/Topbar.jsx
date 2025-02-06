import React, { forwardRef } from "react";

const Topbar = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className=" bg-[#0c96d4]  text-white flex items-center font-['Manrope'] font-bold text-base  h-16 px-28 max-sm:h-36 max-sm:px-2 max-sm:flex-col max-sm:items-start max-sm:py-4"
    >
      <div>
        <address className="text-nowrap cursor-pointer">
          <i className="fa-solid fa-location-dot mx-2 text-xl "></i>
          Faridabad, Haryana, India
        </address>
      </div>
      <div className="basis-3/4 justify-items-end mx-16 max-sm:mx-0 max-sm:basis-0 max-sm:my-3">
        <p>
          <i className="fa-solid fa-phone-volume mx-2 text-lg"></i>
          +91-7982725030, +91-9871249013
        </p>
      </div>
      <div>
        <p className="text-nowrap cursor-pointer">
          <i className="fa-regular fa-paper-plane mx-2 text-lg"></i>
          contact@ubyte.in
        </p>
      </div>
    </div>
  );
});

export default Topbar;
