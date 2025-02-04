import React from "react";

const Footer = () => {
  return (
    <section className="px-28 font-['Manrope'] bg-gradient-to-b from-white from-10% to-[#0c96d4] text-[#60697b] font-medium pb-28 ">
      <div className="flex pt-6">
        <div className="basis-1/4">
          <img src="/logo.png" alt="logo" className="w-[98px] h-16" />
          <p className="my-6">
            © 2024 Sandbox. <br />
            All rights reserved.
          </p>
        </div>
        <div className="basis-1/4 px-4">
          <h6 className="text-lg text-[#343f52] font-bold">Get in Touch</h6>
          <address className="pr-7 my-2 leading-relaxed">
            UByte Consulting <br /> 2181, Sector 28 HB Colony,
            <br /> Faridabad, Haryana - 121008
          </address>
          <p className="my-3">
            contact@ubyte.com <br />
            +91-7982725030
          </p>
        </div>
        <div className="basis-1/4 px-4">
          <h6 className="text-lg text-[#343f52] font-bold">Learn More</h6>
          <ul className="flex flex-col gap-2 my-2">
            <li>About Us</li>
            <li>Our Story</li>
            <li>Projects</li>
            <li>Term of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="basis-1/4 px-4">
          <h6 className="text-lg text-[#343f52] font-bold">Our Social Media</h6>
          <p className="my-2 leading-relaxed">
            Subscribe to our newsletter to get our <br />
            news & deals delivered to you.
          </p>
          <input
            type="text"
            placeholder="Email Address"
            className="h-14 border border-[#e9ecf2] rounded-l-lg p-2  my-2"
          />
          <button className="text-white bg-[#0c96d4] font-semibold text-base p-4 px-5 rounded-r-lg">
            Join
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
