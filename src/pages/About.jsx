import React from "react";
import AboutCard from "../components/about/AboutCard";
import teamData from "../utils/teamData";
import ConnectUs from "../components/about/ConnectUs";

const About = () => {
  return (
    <>
      <section className="">
        <div className="text-center leading-loose p-2 bg-[#f6f7f9] font-['Manrope']  ">
          <h2 className="text-5xl font-bold m-6  text-[#343f52]">
            Hello! This is UByte
          </h2>
          <h5 className="text-[#60697b] font-medium">
            A company turning ideas into beautiful things
          </h5>
        </div>
        <div
          className="-z-10 bg-transparent"
          style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 92%, 0% 100%)" }}
        >
          <img src="/about/team.png" alt="" className="" />
        </div>
      </section>
      <section className=" flex font-['Manrope'] px-28 my-36">
        <div className=" basis-1/2">
          <h2 className="text-[#343f52] font-semibold text-4xl tracking-wider">
            Who Are We?
          </h2>
          <h5 className="text-[#60697b] font-medium text-xl my-4 leading-relaxed tracking-wide">
            We are a digital and branding company that believes in the power of
            creative strategy and along with great design.
          </h5>
          <p className="text-[#60697b] ">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.
          </p>
          <div className="grid grid-cols-2 gap-4 my-6">
            <p>Aenean eu leo quam ornare curabitur blandit tempus.</p>
            <p>Aenean eu leo quam ornare curabitur blandit tempus.</p>
            <p>Aenean eu leo quam ornare curabitur blandit tempus.</p>
            <p>Aenean eu leo quam ornare curabitur blandit tempus.</p>
          </div>
        </div>
        <div className="border-2 border-blue-400 basis-1/2"></div>
      </section>
      <section
        className="bg-[#edf2fc] my-36"
        style={{ clipPath: "polygon(0% 0%, 100% 10%, 100% 100%, 0% 100%)" }}
      >
        <div className="flex px-64 pt-28">
          <div className="basis-1/2">
            <img src="/about/pranay.png" alt="" />
          </div>
          <div className="basis-1/2 px-12 my-auto">
            <h6 className="text-[#60697b] font-medium text-xl leading-relaxed tracking-wide">
              “Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Vestibulum ligula porta felis euismod semper. Cras justo
              odio consectetur nulla dapibus curabitur blandit.”
            </h6>
            <h3 className="text-black font-semibold text-xl my-2">
              Pranay Sharma
            </h3>
            <p className="text-[#60697b] font-medium text-md">Founder & CTO</p>
          </div>
        </div>
      </section>
      <section className="px-28 my-36">
        <div className="text-center font-semibold text-4xl my-16 leading-snug">
          <h1>
            Save your time and money by <br /> choosing our professional team.
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="carousel carousel-center rounded-box w-[100%] space-x-4 py-4 cursor-grab">
            {teamData.map((card, index) => (
              <AboutCard key={index} card={card} />
            ))}
          </div>
        </div>
      </section>
      <section className="flex px-28 my-20">
        <div className="basis-1/2"></div>
        <div className="basis-1/2 text-center">
          <h2 className="text-[#343f52] font-semibold text-4xl tracking-wider">
            Convinced yet? Let's make <br /> something great together.
          </h2>
          <ConnectUs />
        </div>
      </section>
    </>
  );
};

export default About;
