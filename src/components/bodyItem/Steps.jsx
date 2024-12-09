import React from "react";

const Steps = () => {
  return (
    <section className=" px-28 flex">
      <div className="basis-1/2">
        <img src="/sample/step.png" alt="pic" />
      </div>
      <div className="basis-1/2 py-36">
        <div>
          <h2 className="text-[#343f52] font-serif font-semibold text-3xl tracking-wide">
            How It Works?
          </h2>
          <p className="text-[#60697b] font-['Manrope'] font-medium text-xl my-6">
            So here are three working steps why our <br /> valued customers
            choose us.
          </p>
        </div>
        <div>
          <div className="flex justify-between my-6 ">
            <figure className="bg-[#0c96d4] rounded-full w-fit h-10 p-4 flex items-center">
              <h1 className="font-medium text-lg text-white rounded-full">1</h1>
            </figure>
            <div className="mx-10 pr-36">
              <h4 className="text-lg font-semibold">Collect Ideas</h4>
              <p className="text-[#60697b] text-base leading-snug">
                Nulla vitae elit libero pharetra augue dapibus. Praesent commodo
                cursus.
              </p>
            </div>
          </div>
          <div className="flex justify-between my-6 ">
            <figure className="bg-[#0c96d4] rounded-full w-fit h-10 p-4 flex items-center">
              <h1 className="font-medium text-lg text-white rounded-full">2</h1>
            </figure>
            <div className="mx-10 pr-36">
              <h4 className="text-lg font-semibold">Data Analysis</h4>
              <p className="text-[#60697b] text-base leading-snug">
                Nulla vitae elit libero pharetra augue dapibus. Praesent commodo
                cursus.
              </p>
            </div>
          </div>
          <div className="flex justify-between my-6 ">
            <figure className="bg-[#0c96d4] rounded-full w-fit h-10 p-4 flex items-center">
              <h1 className="font-medium text-lg text-white rounded-full">3</h1>
            </figure>
            <div className="mx-10 pr-36">
              <h4 className="text-lg font-semibold">Finalize Product</h4>
              <p className="text-[#60697b] text-base leading-snug">
                Nulla vitae elit libero pharetra augue dapibus. Praesent commodo
                cursus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
