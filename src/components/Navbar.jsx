import React from "react";

const Navbar = ({ navref }) => {
  return (
    <div className="navbar absolute top-0 left-0 w-full py-4 px-4 md:py-6 md:px-8 z-10 flex justify-center md:justify-start">
      <div ref={navref} className="logo flex gap-4 md:gap-10 items-center">
        <div className="lines flex flex-col gap-[4px] md:gap-[5px] justify-center">
          <div className="line w-8 h-1 md:w-12 md:h-1.5 bg-white"></div>
          <div className="line w-5 h-1 md:w-8 md:h-1.5 bg-white"></div>
          <div className="line w-3 h-1 md:w-5 md:h-1.5 bg-white"></div>
        </div>
        <h3 className="text-xl md:text-3xl -m-[5px] md:-m-[7px] leading-none text-white">Rockstar</h3>
      </div>
    </div>
  );
};

export default Navbar;