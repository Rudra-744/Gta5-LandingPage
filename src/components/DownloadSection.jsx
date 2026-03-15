import React from "react";

const DownloadSection = () => {
  return (
    <section
      data-scroll-section
      className="w-full min-h-screen flex items-center justify-center py-10 md:py-0 bg-[#ffffff]"
      aria-label="Game download information section"
    >
      <div className="contner flex flex-col md:flex-row text-[#0f172a] items-center w-[95%] md:w-[92%] h-auto md:h-[80%] gap-10 md:gap-0 rounded-3xl border border-[#93c5fd] bg-[#eff6ff]">
        <div className="limg relative h-[50vh] md:h-full w-full md:w-1/2 flex justify-center items-center">
          <img
            className="md:absolute relative scale-[0.8] md:scale-[0.7] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 object-contain"
            src="/imag.png"
            alt="GTA promotional artwork"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="rg w-[90%] md:w-[34%] py-10 md:py-20 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl">Still Running</h1>
          <h1 className="text-4xl md:text-6xl">Not Hunting</h1>
          <p className="mt-5 md:mt-8 text-base md:text-xl font-[Helvetica] text-[#1e3a8a]">
            Welcome to Los Santos. Grand Theft Auto V is an open-world
            action game where you switch between three main characters:
            Michael, Franklin, and Trevor. Each one has their own story,
            goals, and problems, and their lives collide in a series of
            high-risk heists, shootouts, and chaos across the city. You’re
            free to drive, fly, fight, explore, and choose how you want to
            play—story mode or online with friends.
          </p>
          <p className="mt-3 text-base md:text-xl font-[Helvetica] text-[#1e3a8a]">
            A massive open world, story missions, heists, and GTA Online
            with regular updates.
          </p>
          <button className="bg-[#facc15] px-5 py-3 md:py-5 text-[#111827] mt-5 md:mt-8 text-xl md:text-2xl font-bold cursor-pointer hover:bg-[#fde047] transition-colors rounded-xl border border-[#f59e0b] shadow-[0_8px_30px_rgba(245,158,11,0.35)]">
            Download Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
