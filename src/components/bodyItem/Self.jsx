import React from "react";

const Self = () => {
  return (
    <section className="my-28 px-28 flex">
      <div className="w-1/2">
        <img src="/sample/self.png" alt="pic" />
      </div>
      <div className="w-1/2 px-10 font-['Manrope'] py-10">
        <h4 className="text-[#aab0bc] font-bold">WHO ARE WE?</h4>
        <h2 className="text-[#343f52] font-serif font-semibold text-4xl my-4 tracking-wide leading-snug">
          Company that believes in the <br /> power of creative strategy.
        </h2>
        <p className="text-[#aab0bc] my-5 pr-10">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et.
        </p>
        <div className="text-[#aab0bc] flex">
          <div>
            <p className="my-3">
              {" "}
              Aenean eu leo quam ornare curabitur blandit tempus.
            </p>
            <p className="my-3">
              Aenean eu leo quam ornare curabitur blandit tempus.
            </p>
          </div>
          <div>
            <p className="my-3">
              Aenean eu leo quam ornare curabitur blandit tempus.
            </p>
            <p className="my-3">
              Aenean eu leo quam ornare curabitur blandit tempus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Self;
