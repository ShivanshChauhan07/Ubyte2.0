import React from "react";

const Project = () => {
  return (
    <section className=" text-center">
      <h4 className='font-["Manrope"] font-bold text-[#aab0bc]'>
        LATEST PROJECTS
      </h4>
      <h2 className="font-serif font-semibold text-[#343f52] text-4xl my-5 tracking-wide leading-snug">
        Check out some of our awesome projects <br /> with creative ideas and
        great design.
      </h2>
      <div className="carousel carousel-center bg-white rounded-box w-full space-x-4 p-4">
        <div className="carousel-item w-1/3">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            className="rounded-box w-full h-80"
          />
        </div>
        <div className="carousel-item w-1/3">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            className="rounded-box w-full h-80"
          />
        </div>
        <div className="carousel-item w-1/3">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            className="rounded-box w-full h-80"
          />
        </div>
        <div className="carousel-item w-1/3">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            className="rounded-box w-full h-80"
          />
        </div>
        <div className="carousel-item w-1/3">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            className="rounded-box w-full h-80"
          />
        </div>
        <div className="carousel-item w-1/3">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            className="rounded-box w-full h-80"
          />
        </div>
        <div className="carousel-item w-1/3">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            className="rounded-box w-full h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
