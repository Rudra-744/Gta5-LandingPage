import React from "react";

const DownloadSection = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center  bg-black">
      <div className="contner flex text-white items-center  w-full h-[80%] ">
        <div className="limg relative h-full w-1/2 ">
          <img
            className="absolute scale-[0.7] top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="/imag.png" 
            alt=""
          />
        </div>
        <div className="rg w-[30%] py-30">
          <h1 className="text-6xl">Still Running</h1>
          <h1 className="text-6xl">Not Hunting</h1>
          <p className="mt-10 text-xl font-[Helvetica]">
            Welcome to Los Santos. Grand Theft Auto V is an open-world
            action game where you switch between three main characters:
            Michael, Franklin, and Trevor. Each one has their own story,
            goals, and problems, and their lives collide in a series of
            high-risk heists, shootouts, and chaos across the city. You’re
            free to drive, fly, fight, explore, and choose how you want to
            play—story mode or online with friends.
          </p>
          <p className="mt-3 text-xl font-[Helvetica]">
            A massive open world, story missions, heists, and GTA Online
            with regular updates.
          </p>
          <button className="bg-yellow-500 px-5 py-5 text-black mt-10 text-2xl">
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;