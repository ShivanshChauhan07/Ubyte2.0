import React, { forwardRef } from "react";

const Topbar = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className=" bg-[#0c96d4]  text-white flex items-center font-['Manrope'] font-bold text-base  h-16 px-28 "
    >
      <div>
        <address className="text-nowrap">
          <i className="fa-solid fa-location-dot mx-2 text-xl "></i>
          Moonshine St. 14/05 Light City
        </address>
      </div>
      <div className="basis-3/4 justify-items-end mx-16">
        <p>
          <i className="fa-solid fa-phone-volume mx-2 text-lg"></i>
          9999999999
        </p>
      </div>
      <div>
        <p className="text-nowrap">
          <i className="fa-regular fa-paper-plane mx-2 text-lg"></i>
          ubyte@email.com
        </p>
      </div>
    </div>
  );
});

export default Topbar;
