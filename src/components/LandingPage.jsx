import React from "react";
import Navbar from "./Navbar";

const LandingPage = ({ navref }) => {
  return (
    <section
      data-scroll-section
      className="landing w-full h-screen relative"
      aria-label="GTA hero section"
    >
      <Navbar navref={navref} />

      <div className="imagesdiv w-full min-h-screen relative overflow-hidden">
        <img
          src="/sky.png"
          alt=""
          loading="eager"
          fetchPriority="high"
          className="sky absolute scale-[1.6] rotate-[-20deg] top-0 left-0 object-cover w-full h-full"
        />
        <img
          src="/bg.png"
          alt=""
          loading="eager"
          fetchPriority="high"
          className="absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 object-cover w-full h-full"
        />
        <div className="text absolute text-white top-14 md:top-10 left-1/2 -translate-x-1/2 w-full text-center">
          <div className="text-inner flex flex-col items-center gap-1 md:gap-2">
            <h1 className="text-[18vw] md:text-[10vw] leading-[0.9]">grand</h1>
            <h1 className="text-[18vw] md:text-[10vw] leading-[0.9]">theft</h1>
            <h1 className="text-[18vw] md:text-[10vw] leading-[0.9]">auto</h1>
          </div>
        </div>
        <img
          src="/girlbg.png"
          alt="GTA character silhouette"
          loading="eager"
          className="character absolute -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]"
        />
      </div>

      <div className="btmbar text-white w-full absolute bottom-0 left-0 py-6 px-4 md:py-10 md:px-8 bg-gradient-to-t from-black to-transparent">
        <div className="flex gap-4 items-center">
          <i className="text-xl z-10 ri-arrow-down-line"></i>{" "}
          <h3 className="font-[Gilroy] font-thin text-lg md:text-xl">Scroll down</h3>
        </div>
        <img
          className="h-[8vw] md:h-[3vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="/ps5.png"
          alt="PlayStation 5"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default LandingPage;
