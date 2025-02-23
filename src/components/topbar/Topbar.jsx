import React, { forwardRef } from "react";

const Topbar = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className=" bg-[#0c96d4]  text-white flex items-center font-['Manrope'] font-bold text-base  h-16 px-28 max-sm:h-36 max-sm:px-2 max-sm:flex-col max-sm:items-start max-sm:py-4"
    >
      <div>
        <address className="text-nowrap cursor-pointer">
          <a href="https://www.google.com/maps/place/Ubyte+Consulting/@28.4368117,77.3102791,771m/data=!3m1!1e3!4m6!3m5!1s0x390cdd65162f74d7:0xde4107b6519e1c58!8m2!3d28.436807!4d77.312854!16s%2Fg%2F11y9hvwb13?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D">
            <i className="fa-solid fa-location-dot mx-2 text-xl "></i>{" "}
            Faridabad, Haryana, India{" "}
          </a>
        </address>
      </div>
      <div className="basis-3/4 justify-items-end mx-16 max-sm:mx-0 max-sm:basis-0 max-sm:my-3">
        <p>
          <i className="fa-solid fa-phone-volume mx-2 text-lg"></i>
          +91-7982725030, +91-9899977637
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
