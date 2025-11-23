import React from "react";
import Navbar from "./Navbar";

const LandingPage = ({ navref }) => {
  return (
    <div className="landing w-full h-screen relative ">
      <Navbar navref={navref} />

      <div className="imagesdiv w-full min-h-screen relative overflow-hidden">
        <img
          src="/sky.png" // Corrected path
          alt=""
          className="sky absolute scale-[1.6] rotate-[-20deg] top-0 left-0 object-cover w-full h-full"
        />
        <img
          src="/bg.png" // Corrected path
          alt=""
          className="absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0  object-cover w-full h-full"
        />
        <div className="text absolute text-white top-0 left-1/2 -translate-x-1/2 mt-10 flex flex-col items-center gap-3">
          <h1 className="text-[10vw] -ml-40  leading-none">grand</h1>
          <h1 className="text-[10vw] ml-20 leading-none ">theft</h1>
          <h1 className="text-[10vw] -ml-50  leading-none">auto</h1>
        </div>
        <img
          src="/girlbg.png" // Corrected path
          alt=""
          className="character absolute -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg] "
        />
      </div>

      <div className="btmbar text-white w-full absolute bottom-0 left-0 py-10 px-8 bg-gradient-to-t from-black to-tranparent">
        <div className="flex gap-4  items-center">
          <i className="text-xl z-10 ri-arrow-down-line"></i>{" "}
          <h3 className="font-[Gilroy] font-thin text-xl ">Scroll down</h3>
        </div>
        <img
          className="h-[3vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
          src="/ps5.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default LandingPage;