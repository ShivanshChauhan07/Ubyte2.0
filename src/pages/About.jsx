import React from "react";
import AboutCard from "../components/about/AboutCard";
import teamData from "../utils/teamData";
import ConnectUs from "../components/about/ConnectUs";

const About = () => {
  return (
    <>
      <section className=" max-sm:px-5">
        <div className="text-center leading-loose p-2 bg-[#f6f7f9] font-['Manrope']  ">
          <h2 className="text-5xl font-bold m-6  text-[#343f52] max-sm:text-3xl">
            Hello! This is Ubyte
          </h2>
          <h5 className="text-[#60697b] font-medium max-sm:text-center">
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
      <section className=" flex font-['Manrope'] px-28 my-36 gap-4 max-sm:px-5 max-sm:flex-col-reverse max-sm:my-20">
        <div className=" basis-1/2">
          <h2 className="text-[#343f52] font-semibold text-4xl tracking-wider max-sm:text-2xl max-sm:mt-2">
            Who Are We?
          </h2>
          <h5 className="text-[#60697b] font-medium text-xl my-4 leading-relaxed tracking-wide max-sm:text-lg">
            Company that believes in the power of creative strategy.
          </h5>
          <p className="text-[#60697b] max-sm:text-base ">
            We provide end to end product design and manufacturing services to
            individuals and business at unbeatable prices. Backed by trust of
            100+ clients for 400+ products spread across the world, we will
            bring your idea to life. So why not give us a try.
          </p>
          <div className="grid grid-cols-2 grid-flow-row gap-2 my-6">
            <p className="my-3 ">
              {" "}
              <span className="font-semibold text-[#343f52] ">
                Full-Service Solutions:
              </span>{" "}
              We handle every stage of product development, from design to
              manufacturing.
            </p>
            <p className="my-3">
              <span className="font-semibold text-[#343f52]">
                {" "}
                Global Expertise:{" "}
              </span>{" "}
              Successful products delivered across the world.
            </p>
            <p className="my-3">
              <span className="font-semibold text-[#343f52]">
                {" "}
                Skilled Team:{" "}
              </span>{" "}
              Experienced engineers and designers ensure quality and innovation.
            </p>
            <p className="my-3">
              <span className="font-semibold text-[#343f52]">
                {" "}
                Cost-Effective:{" "}
              </span>{" "}
              High-quality solutions at competitive prices.
            </p>
          </div>
        </div>
        <div className=" basis-1/2">
          <img src="/about/office.jpeg" alt="" className="rounded-md" />
        </div>
      </section>
      <section
        className="bg-[#edf2fc] my-36 max-sm:px-5 max-sm:py-10 max-sm:my-20"
        style={{ clipPath: "polygon(0% 0%, 100% 10%, 100% 100%, 0% 100%)" }}
      >
        <div className="flex px-64 pt-28 max-sm:px-0 max-sm:pt-10  ">
          <div className="basis-1/2 max-sm:hidden">
            <img src="/about/PranayPhoto.png" alt="" className="h-[31.25rem]" />
          </div>
          <div className="basis-1/2 px-12 my-auto max-sm:basis-full max-sm:px-0">
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
      <section className="px-28 my-36 max-sm:px-5 max-sm:my-20">
        <div className="text-center font-semibold text-4xl my-16 leading-snug max-sm:text-3xl">
          <h1>
            Save your time and money by <br className="block max-sm:hidden" />{" "}
            choosing our professional team.
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="carousel carousel-center rounded-box w-[100%] space-x-4 py-4 cursor-grab ma">
            {teamData.map((card, index) => (
              <AboutCard key={index} card={card} />
            ))}
          </div>
        </div>
      </section>
      <section className="flex px-28 my-20 gap-x-8 max-sm:px-5 max-sm:flex-col">
        <div className="basis-1/2 content-center justify-items-center">
          <img
            src="/about/meeting.jpg"
            alt=""
            className="rounded-lg aspect-auto w-11/12"
          />
        </div>
        <div className="basis-1/2 text-center">
          <h2 className="text-[#343f52] font-semibold text-4xl tracking-wider max-sm:text-3xl max-sm:my-8">
            Convinced yet? Let's make <br className="block max-sm:hidden" />{" "}
            something great together.
          </h2>
          <ConnectUs />
        </div>
      </section>
    </>
  );
};

export default About;
